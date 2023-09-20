import React from "react";
import styles from "./layout.module.css";

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
  return <div className={styles.background}>{children}</div>;
}
