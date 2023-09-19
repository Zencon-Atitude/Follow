import React from "react";
import TopBar from "@/components/topbar/topbar";
import Main from "@/components/main/main";
import Menu from "@/components/menu/menu";
import styles from "./layout.module.css";
import { Loading } from "../loading/loading";

export default function Layout({
  children,
  propTopBar,
  propMain,
  propMenu,
  isLoading,
}: {
  children: React.ReactNode;
  propTopBar?: object;
  propMain?: object;
  propMenu?: object;
  topBarText?: string;
  isLoading?: boolean;
}) {
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <TopBar {...propTopBar} />
      <Main {...propMain}>{children}</Main>
      <Menu {...propMenu} />
    </>
  );
}
