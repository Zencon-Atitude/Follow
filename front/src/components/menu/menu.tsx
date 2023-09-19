// Standard Next libs
import Link from 'next/link';

// Styles
import styles from './menu.module.css';
import utilStyles from '@/styles/utils.module.css';

export default function Menu({className = '', mode = 2}: {className?: string, mode?: number}) {
	if (!mode) return ;
	
	return (
		<footer className={`${styles.container} ${styles.position} ${utilStyles.roundedTop} ${className}`}>
			{
				(mode === 2) && (
					<>
						<Link href={"/dashboard/situation"}>
							<div className={styles.moneyIcon}></div>
						</Link>
						<Link href="/dashboard">
							<div className={styles.homeIcon}></div>
						</Link>
						<Link href={"/"}>
							<div className={styles.lupeIcon}></div>
						</Link>
					</>
				)
			}
		</footer>
	);
}