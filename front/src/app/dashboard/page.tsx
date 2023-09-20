"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Layout from "@/components/layout/layout";
import { useNomoState } from "@/hooks/custom_hooks";
import { nomo } from "nomo-plugin-kit/dist/nomo_api";
import { useAuth } from "@/hooks/useAuth";

export default function Welcome() {
  const [platformInfo, _] = useNomoState(nomo.getPlatformInfo);
  const [walletAddresses, isLoading] = useNomoState(nomo.getWalletAddresses);
  const [userEth, setUserEth] = useState<string | undefined>("");
  const { user } = useAuth();

  const props: object = {
    propTopBar: {
      mode: 2,
      title: `Your Address: ${userEth}`,
      back: false,
    },
    propMain: {
      mode: 1,
      icon: true,
      className: styles.mainContainer,
    },
    propMenu: {
      mode: 2,
      className: "",
    },
    isLoading,
  };

  useEffect(() => {
    nomo.enableMobileConsoleDebugging();
    if (platformInfo === null) return;
    if (walletAddresses === null) return;

    if (platformInfo.appName === "Not in Nomo app!") {
      if (user?.target_adr)
        setUserEth(user && (user?.target_adr.ETH).slice(0, 6) + "...");
    } else {
      setUserEth(walletAddresses.walletAddresses["ETH"].slice(0, 6) + "...");
    }
  }, [walletAddresses, platformInfo, user]);

  return (
    <Layout {...props}>
      <div className={styles.topper}>
        <Image
          alt="logo-text"
          src="/profile.png"
          width={50}
          height={51}
          style={{
            opacity: 0.8,
          }}
          className={styles.logoMargin}
        />
        <p className={styles.topperText}>Hello, {userEth}</p>
      </div>
      <div className={styles.divider}>
        <div className={styles.dividerBorder}></div>
        <div className={styles.dividerLine}></div>
      </div>
      <div className={styles.buttonArea}>
        <Link href="/dashboard/education" className={styles.buttonContainer}>
          <div className={styles.button}>
            <Image
              alt="logo-text"
              src="/books.png"
              width={40}
              height={40}
              style={{
                opacity: 0.5,
                filter: "invert(1)",
              }}
              className={styles.logoMargin}
            />
            </div>
            <p
              style={{
                marginRight: 10,
                color: "white",
              }}
            >
              Education
            </p>
        </Link>
        <Link href="/dashboard/operational" className={styles.buttonContainer}>
          <div className={styles.button}>
            <Image
              alt="logo-text"
              src="/graphic.png"
              width={40}
              height={40}
              style={{
                opacity: 0.5,
                filter: "invert(1)",
              }}
              className={styles.logoMargin}
            />
          </div>
          <p
            style={{
              marginRight: 10,
              color: "white",
            }}
          >
            Operational
          </p>
        </Link>
        <Link href="/dashboard/marketplace" className={styles.buttonContainer}>
          <div className={styles.button}>
            <Image
              alt="logo-text"
              src="/card.png"
              width={40}
              height={40}
              style={{
                opacity: 0.5,
                filter: "invert(1)",
              }}
              className={styles.logoMargin}
            />
          </div>
          <p
            style={{
              marginRight: 10,
              color: "white",
            }}
          >
            Marketplace
          </p>
        </Link>
        <Link href="/dashboard/community" className={styles.buttonContainer}>
          <div className={styles.button}>
            <Image
              alt="logo-text"
              src="/persons.png"
              width={40}
              height={40}
              style={{
                opacity: 0.5,
                filter: "invert(1)",
                marginRight: 5,
              }}
              className={styles.logoMargin}
            />
          </div>
          <p
            style={{
              marginRight: 10,
              color: "white",
            }}
          >
            Community
          </p>
        </Link>
      </div>
    </Layout>
  );
}
