import Link from 'next/link';
import styles from './page.module.css'
import Layout from '@/components/layout/layout'

export default function News() {
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
			<h1>This is New Page Index</h1>
		</Layout>
	)
}