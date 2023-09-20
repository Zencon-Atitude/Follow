"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Layout from "@/components/layout/layout";
import { useNomoState } from "@/hooks/custom_hooks";
import { nomo } from "nomo-plugin-kit/dist/nomo_api";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";

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
      <div className={styles.topHeader}>
        <div
          className={styles.topperLeft}
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          <Image
            alt="logo-text"
            src="/back.png"
            width={20}
            height={20}
            style={{
              opacity: 0.8,
            }}
            className={styles.logoMargin}
          />
        </div>
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
      </div>
      <div className={styles.divider}>
        <div className={styles.dividerBorder}></div>
        <div className={styles.dividerLine}></div>
      </div>
    </Layout>
  );
}
