"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import utilStyles from "@/styles/utils.module.css";
import Layout from "@/components/layout/layout";
import { Jost, Rubik } from "next/font/google";
import SquareCard from "@/components/SquareCard/squareCard";
import { getNewsData } from "@/lib/newsData";
import { getNewsAssetsData } from "@/lib/newAssetsData";
import { useNomoState } from "@/hooks/custom_hooks";
import { nomo, nomoGetWalletAddresses } from "nomo-plugin-kit/dist/nomo_api";
import NEWS_LIST from "./news.json";
import NEWS_LIST_ASSETS from "./newAssets.json";
import { useAuth } from "@/hooks/useAuth";

const jost = Jost({
  weight: "600",
  subsets: ["latin"],
});

const rubik = Rubik({
  subsets: ["latin"],
});

export default function Welcome() {
  const [platformInfo, _] = useNomoState(nomo.getPlatformInfo);
  const [walletAddresses, isLoading] = useNomoState(nomo.getWalletAddresses);
  const [userEth, setUserEth] = useState<string | undefined>("");
  const [newsList, setNewsList] = useState(NEWS_LIST.news);
  const { user } = useAuth();

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])

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
      <section className={`${styles.container} ${styles.profileContainer}`}>
        <div className={utilStyles.iconedTitle}>
          <h3 className={`${utilStyles.title}`} style={rubik.style}>
            Welcome!!
          </h3>
        </div>
        <p
          className={rubik.className}
          style={{ fontSize: "1.3rem", fontWeight: 400 }}
        >
          Hello, {userEth}
        </p>
      </section>

      <section className={styles.menu}>
        <div className={styles.menuItem}>
          <div className={styles.menuItemIcon}>
            <Image
              alt="news-icon"
              src="/images/icons/farmer.png"
              width={50}
              height={50}
            />
          </div>
          <h1 style={jost.style} className={styles.menuItemText}>
            COOPERATIVE
          </h1>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.menuItemIcon}>
            <Image
              alt="news-icon"
              src="/images/icons/places.png"
              width={50}
              height={50}
            />
          </div>
          <h1 style={jost.style} className={styles.menuItemText}>
            MARKETPLACE
          </h1>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.menuItemIcon}>
            <Image
              alt="news-icon"
              src="/images/icons/map.png"
              width={50}
              height={50}
            />
          </div>
          <h1 style={jost.style} className={styles.menuItemText}>
            NEW AREAS
          </h1>
        </div>
      </section>

      <section className={`${styles.container} ${styles.sectionContainer}`}>
        <div className={styles.sectionHead}>
          <div className={utilStyles.iconedTitle} id="origami">
            <Image
              alt="news-icon"
              src="/images/icons/newsIcon.svg"
              width={24}
              height={19}
            />
            <h2 className={`${jost.className} ${utilStyles.title}`}>News</h2>
          </div>
          <Link href="/dashboard/news">more</Link>
        </div>
        <div className={styles.cardList}>
          {newsList.map((card, idx) => {
            return <SquareCard {...card} key={idx} />;
          })}
        </div>
      </section>
    </Layout>
  );
}
