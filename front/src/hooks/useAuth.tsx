"use client";
import { fetchData } from "@/utils/fetchData";
import { createContext, useContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import nookies from "nookies";

interface IAuthContext {
  socket: Socket;
  qr: string;
  message: string;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

interface IPayloadMessage {
  message: any;
}

interface IStoreAuthProvider {
  children: React.ReactNode;
}

interface IUser {
  sub: string;
  target_adr: { ETH: string };
  uri: string;
  wallet_name: string;
  auth_adr: string;
  auth_sig: string;
  salt: string;
  iat: number;
  exp: number;
}

const AuthContext = createContext({} as IAuthContext);

let socket: Socket;
const StoreAuthProvider = ({ children }: IStoreAuthProvider) => {
  const [qr, setQr] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [user, setUser] = useState<IUser | undefined>(undefined);

  const socketInitializer = async () => {
    socket = io(process.env.SOCKET_API as string, {
      withCredentials: true,
      secure: true,
    });

    socket.on("connect", onConnected);
    socket.on("auth_scan", onAuthScan);
    socket.on("authenticated", onAuthenticated);

    return null;
  };

  const onConnected = () => {
    socket.emit("auth_emit_qr", {}, (code: string) => setQr(code));
  };

  const onAuthScan = (payload: IPayloadMessage) => {
    setMessage(payload.message);
  };

  const onAuthenticated = async (payload: IPayloadMessage) => {
    const result = await fetch(process.env.BACKEND_API + "/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await await result.json();

    if (result.ok) {
      nookies.set(null, "access_token", data.accessToken, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      window.location.href = "/dashboard";
      setMessage("");
    }
  };

  const fetchUser = async () => {
    const user = await fetchData({
      pathName: "/user/me",
      method: "GET",
      accessToken: nookies.get(null).access_token,
    });
    setUser(user);
  };

  useEffect(() => {
    if (!user) fetchUser();
    socketInitializer();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        socket,
        qr,
        message,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { StoreAuthProvider, useAuth };
