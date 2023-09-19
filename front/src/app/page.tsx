"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/layout/layout";
import { useNomoState } from "@/hooks/custom_hooks";
import { nomo } from "nomo-plugin-kit/dist/nomo_api";
import { useEffect } from "react";

export default function Home() {
  const [platformInfo, isLoading] = useNomoState(nomo.getPlatformInfo);
  const props: object = {
    propTopBar: {
      mode: 1,
      title: undefined,
      back: false,
    },
    propMain: {
      mode: 2,
      className: styles.mainContainer,
      icon: true,
    },
    propMenu: {
      mode: 0,
      className: "",
    },
    isLoading
  };

  return (
    <Layout {...props}>
      <Image
        alt="logo-text"
        src="/images/logoText.png"
        width={266}
        height={51}
        className={styles.logoMargin}
      />
      <Link
        href={
          platformInfo !== null && platformInfo.appName === "Not in Nomo app!"
            ? "/ZeniqID"
            : "/dashboard"
        }
      >
        <button
          className={`${styles.buttonContainer} ${styles.loginButtonContent}`}
        >
          LOG IN
        </button>
      </Link>
    </Layout>
  );
}
