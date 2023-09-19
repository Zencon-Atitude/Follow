import styles from "./main.module.css";
import utilStyles from "@/styles/utils.module.css";
import Image from 'next/image';


export default function Main({className = '', children, mode = 1, icon = true}: {className?: string, children?: React.ReactNode, mode?: number, icon?: boolean}) {
	const	modeCss = styles[`varMode${mode}`];
	let		customStyles : string = `${modeCss} ${styles.mainContent} ${className}`;
	customStyles += mode === 1 ? "" : ` ${utilStyles.roundedTop}`;
	return (
		<div className={`${modeCss} ${styles.mainContainer}`}>
			{
				(icon) && (
					<Image
						alt="bell icon"
						src="/images/sininho.svg"
						width={36}
						height={36}
						className={styles.bellIcon}
					/>
				)
			}
			
			<div className={`${customStyles}`}>
				{children}
			</div>
		</div>
	);
}