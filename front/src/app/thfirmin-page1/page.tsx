// Components
import Layout from '@/components/layout/layout';

// Styles
import styles from './page.module.css';
import utilStyles from '@/styles/utils.module.css';

export default function SellConfirmation() {
    
    const   propTopbar:object = {};
    const   propMenu:object = {};
    const   propMain:object = {};
    return (
        <Layout propMain={propMain} propMenu={propMenu} propTopBar={propTopbar}>
            <h1>Sell Confirmation Page</h1>
        </Layout>
    );
}