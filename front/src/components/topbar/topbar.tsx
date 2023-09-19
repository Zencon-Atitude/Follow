"use client"
import { useRouter } from 'next/navigation';
import styles from "./topbar.module.css";
import utilStyles from "@/styles/utils.module.css";
import React from "react";
import Link from "next/link";

// all -> container
// mode 1 : home -> topBarBackground introTopBar
// mode 2 : default ->
// mode 3 : zeniq ->

export default function TopBar({
  mode = 2,
  title,
  back = true,
  color
}: {
  mode?: number;
  title?: string | undefined;
  back?: boolean;
  color?: string;
}) {
  const router = useRouter();
  if (mode < 1 || mode > 3) return;

  const varClass: string = styles[`varMode${mode}`];

  let classStr: string = `${varClass}  ${styles.topBarContainer}  ${styles.topBarBackground}`;

  if (mode === 1) {
    classStr += ` ${utilStyles.roundedBot}`;
  }

  return (
    <header className={classStr}>
      <div className={styles.topBarSubContainer}>
        <div className={styles.topBarIcons}>
          {back ? (
            <div className={styles.topBarBackButton} onClick={() => router.back()}></div>         
          ) : <div className={styles.topBarLogo}></div>}
          {title && (
            <h1 className={styles.topBarTitle} style={{ color }}>
              {title}
            </h1>
          )}
          <div className={styles.topBarProfile}></div>
        </div>
        <div className={styles.topBarLine}></div>
      </div>
    </header>
  );
}
