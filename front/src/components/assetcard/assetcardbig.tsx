import Link from 'next/link';
import styles from './assetcardBig.module.css'
import utilStyles from '@/styles/utils.module.css'
import Layout from '@/components/layout/layout'
import Image from 'next/image'

export default function AssetCardBig({value =  0, imgUrl = "", btnStr, description = "", bigCard = true}: {value?: number, imgUrl?: string, btnStr?: string | undefined, description?: string, bigCard?: boolean}) {
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
                <p>{description}</p>
            </div>
        </div>
    );
}