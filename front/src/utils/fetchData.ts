"use server";
import { cookies } from "next/headers";

export interface FetchDataI {
  pathName: string;
  body?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  accessToken?: string | null;
}

export const fetchData = async ({
  pathName,
  method = "GET",
  body,
  accessToken
}: FetchDataI): Promise<any> => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken,
  };

  try {
    const options: { headers: any; method: any; credentials: any; body?: any } =
      {
        headers: headers,
        method,
        credentials: "include",
      };

    if (method === "POST" || method === "PUT" || method === "PATCH") {
      options["body"] = JSON.stringify(body);
    }

    let res = await fetch(process.env.BACKEND_API + pathName, options);

    return res.json();
  } catch (err: any) {
    console.log(`Error Message:${err.message}, Status Code:${err.statusCode}`);
    throw err;
  }
};
