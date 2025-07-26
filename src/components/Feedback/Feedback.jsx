import styles from './Feedback.module.css'

export default function Feedback({ good, neutral, bad, total, positive }) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.stat}>Good: {good}</p>
            <p className={styles.stat}>Neutral: {neutral}</p>
            <p className={styles.stat}>Bad: {bad}</p>
            <p className={styles.stat}>Total: {total}</p>
            <p className={styles.stat}>Positive: {positive}%</p>
        </div>
    )
}
