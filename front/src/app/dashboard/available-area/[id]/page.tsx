import Link from 'next/link';
import styles from './page.module.css'
import utilStyles from '@/styles/utils.module.css'
import Layout from '@/components/layout/layout'
import { Metadata } from 'next'
import Image from 'next/image'
import AssetCardBig from '@/components/assetcard/assetcardbig';


export const metadata: Metadata = {
	title: 'Buy Asset - OriginaToken'
}

export default function AvailableArea() {
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

	const owner: string = "Antonio"
	const value: number = 5;
	const region: string = "Minas Gerais";
	const area: number = 23.000;

	return (
		<Layout {...props}>
			<AssetCardBig 
			value={100}
			description={"test description long long long goewkflkamfliecmkamwc iaiwcmaklcwma"}
			/>
			<div className={styles.buyInfoContainer}> {/* Info Container */}
				<div className={styles.leftSideContainer}> {/* left */}
					<div className={styles.flexContent}>
						<Image
							src=""
							alt=""
							width={35}
							height={35}
							/>
						<div>
							<h3>Owner:</h3>
							<h1>{owner}</h1>
						</div>
					</div>
					<div className={styles.flexContent}>
						<Image
								src="/images/topBar/originaLogo3.svg"
								alt=""
								width={17}
								height={23}
								/>
						<h1>$ ${value} m²</h1>
					</div>
					<div className={styles.flexContent}>
						<Image
								src=""
								alt=""
								width={20}
								height={20}
								/>
						<h1>Nascente Preservada</h1>
					</div>
					<div className={styles.flexContent}>
						<Image
								src=""
								alt=""
								width={29}
								height={20}
						/>
						<h1>Mata Atlântica</h1>
					</div>
				</div>
				<div className={styles.rightSideContainer}> {/* Right */}
					<div className={styles.flexContent}>
						<Image
								src=""
								alt=""
						/>
						<h1>{region}</h1>
					</div>
					<div className={styles.flexContent}>
						<Image
								src=""
								alt=""
						/>
						<div>
							<h3>Area:</h3>
							<h1>{area}</h1>
						</div>
					</div>
					<div> {/* Badges */}
						<div>
							<Image
									src=""
									alt=""
									width={28}
									height={28}
									/>
							<Image
									src=""
									alt=""
									width={28}
									height={28}
									/>
							<Image
									src=""
									alt=""
									width={28}
									height={28}
									/>
						</div>
						<div>
							<Image
									src=""
									alt=""
									width={28}
									height={28}
									/>
							<Image
									src=""
									alt=""
									width={28}
									height={28}
							/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}