import Image from 'next/image';
import styles from './squareCard.module.css';

export default function SquareCard({mode = 1, name = 'SquareCard', title, card}: { mode?: number, name?: string, title: string | { icon: null | { src: string, alt: string, width: number, height: number }, text: string }, card: { alt: string, src: string } }) {
    const   cssMode: string = styles[`varMode${mode}`];
    const   width: number = (mode === 2) ? 103 : 134;
    const   height: number = (mode === 2) ? 77 : 129;
    
    let     icon: React.ReactNode;
    let     text: React.ReactNode;
    if ((typeof(title) === 'object') && title.icon !== null) {
        icon = (
            <Image
                alt={title.icon.alt}
                src={title.icon.src}
                width={title.icon.width}
                height={title.icon.height}
            />
        );
    }
    if (typeof(title) === 'string') {
        text = (<h1 className={`${cssMode} ${styles.description}`}>{title}</h1>)
    }
    else {
        text = (<h1 className={`${cssMode} ${styles.description}`}>{title.text}</h1>)
    }

    return (
        <div id={name} className={`${cssMode} ${styles.container}`}>
            <Image
                alt={card.alt}
                src={card.src}
                width={width}
                height={height}
            />
            <div className={styles.cardDetail}>
                {icon}
                {text}
            </div>
        </div>
    );
}