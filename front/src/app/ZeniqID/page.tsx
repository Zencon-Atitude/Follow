"use client";
import Link from "next/link";
import styles from "./page.module.css";
import Layout from "@/components/layout/layout";
import { useAuth } from "@/hooks/useAuth";
import QRCode from "react-qr-code";
import { useNomoState } from "../../hooks/custom_hooks";
import { nomo } from "nomo-plugin-kit/dist/nomo_api";
import { getCurrentNomoTheme } from "nomo-plugin-kit/dist/nomo_theming";
import { useEffect } from "react";
import Image from "next/image";

export default function ZeniqID() {
  const { qr, message, user } = useAuth();

  const props: object = {
    propTopBar: {
      mode: 3,
      title: "Acesso ao Origina",
      color: "black",
      back: false,
    },
    propMain: {
      className: styles.mainContainer,
      mode: 1,
      icon: false,
    },
    propMenu: {
      mode: 1,
      className: "",
    },
  };

  return (
    <Layout {...props}>
      <div className={styles.top}>
        <Image
          alt="logo-text"
          src="/logo.png"
          width={100}
          height={51}
          className={styles.logoMargin}
        />
      </div>
      <div className={styles.main}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "80%", width: "80%" }}
          value={qr || ""}
          onClick={() => window.open(qr || "")}
          viewBox={`0 0 256 256`}
        />
      </div>
    </Layout>
  );
}
