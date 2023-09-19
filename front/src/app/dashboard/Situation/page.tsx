import Link from 'next/link';
import styles from './page.module.css'
import Layout from '@/components/layout/layout'
import utilStyles from "@/styles/utils.module.css";
import Image from 'next/image';
import AssetCard from '@/components/assetcard/assetcard';

export default function Situation() {
	const props: object = {
		propTopBar: {
			mode: 2,
			title: undefined
		},
		propMain: {
			className: '',
			mode: 1,
			icon: true
		},
		propMenu: {
			className: '',
			mode: 2
		}
	  };
	
	  return (
		<Layout {...props}>
			<div className={utilStyles.iconedTitle}>
				<Image
					src="/images/icons/walletIcon.svg"
					alt=""
					width={26}
					height={27}
				/>
				<h1 className={utilStyles.subtitle}>My Wallet</h1>
			</div>
			<div className={styles.walletContainer}>
				<div className={styles.walletContainerRight}>
					<div>
						<h1>Balance</h1>
					</div>
					<div>
						<Image 
							src="/images/topBar/originaLogo1.svg"
							width={18}
							height={19}
							alt=""
						/>
						<h2>155.20</h2>
					</div>

				</div>
				<div> {/* right side */}
					<Image 
						src="/images/topBar/originaLogo1.svg"
						width={18}
						height={19}
						alt=""
					/>
				</div>
			</div>
			<div className={utilStyles.iconedTitle}>
				<Image
					src="/images/icons/walletIcon.svg"
					alt=""
					width={26}
					height={27}
				/>
				<h1 className={utilStyles.subtitle}>My Origina Properties</h1>
			</div>
			<AssetCard 
				value = {150}
				imgUrl = "/images/temp_assets/image5.svg"
				btnStr = "Saber mais"
				description = "Fazenda Catuí - Carmo da Cachoeira - MG - BR"
				/>
			<AssetCard 
				value = {150}
				imgUrl = "/images/temp_assets/image5.svg"
				btnStr = "Saber mais"
				description = "Fazenda Catuí - Carmo da Cachoeira - MG - BR"
			/>
			<div className={styles.optionsContainer}>
				<Link href="/dashboard/available-area"><button className={`${utilStyles.button} ${styles.buttonspecs}`}>Comprar</button></Link>
				<Link href="/dashboard/my-assets"><button className={`${utilStyles.button} ${styles.buttonspecs}`}>Vender</button></Link>
			</div>
		</Layout>
	)
}