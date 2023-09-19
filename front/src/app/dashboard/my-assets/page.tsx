import Link from 'next/link';
import styles from './page.module.css'
import utilStyles from '@/styles/utils.module.css'
import Layout from '@/components/layout/layout'
import getSellAssets from '@/lib/getassets';
import { Metadata } from 'next'
import Image from 'next/image'
import AssetCard from '@/components/assetcard/assetcard';

export const metadata: Metadata = {
	title: 'My Assets - OriginaToken'
}

export default function MyProperties() {	
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
	const allAssets = getSellAssets().assets;
	return (
		<Layout {...props}>
			<div className={utilStyles.iconedTitle}>
				<Image
					src="/images/icons/walletIcon.svg"
					alt=""
					width={26}
					height={27}
				/>
				<h1 className={utilStyles.subtitle}>Minhas Propriedades</h1>

			</div>
			<ul className={styles.assetContainer}>
				{allAssets.map((asset: any, id: any) => (
					<Link className={styles.assetLink} href={`/${encodeURI(allAssets.name)}`} key={0}>
						<li key={1}>
							<AssetCard
								value = {asset.value}
								imgUrl = {asset.imgUrl}
								btnStr = "Vender"
								description = {asset.description}
							/>
						</li>
					</Link>
				))}
			</ul>
		</Layout>
	)
}