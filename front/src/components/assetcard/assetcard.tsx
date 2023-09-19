import Link from 'next/link';
import styles from './assetcard.module.css'
import utilStyles from '@/styles/utils.module.css'
import Layout from '@/components/layout/layout'
import Image from 'next/image'

export default function AssetCard({value =  0, imgUrl = "", btnStr, description = ""}: {value?: number, imgUrl?: string, btnStr?: string | undefined, description?: string}) {
    const hasButton = (typeof(btnStr) != 'undefined');
    return (
        <div className={styles.assetCard}>
            <div className={styles.assetCardInfo}>
                <div className={styles.assetCardInfoLeft}>
                    <Image 
                        src="/images/topBar/originaLogo1.svg"
                        width={27.47}
                        height={29}
                        alt="asset"
                    />
                    <h3 className={styles.assetTokensText}>{value}</h3>
                </div>
                <Image
                    src={imgUrl}
                    className={styles.assetImage}
                    alt=""
                    fill
                />
                {hasButton && (
                    <button className={`${utilStyles.button} ${styles.buttonspecs}`}>{btnStr}</button>
                )}
            </div>
            <div className={styles.assetCardInfoDesc}>
                <Image									
                    src="/images/icons/iconFarm.svg"
                    className={""}
                    width={16}
                    height={12}
                    alt=""
                />
                <h5>{description}</h5>
            </div>
        </div>
    );
}