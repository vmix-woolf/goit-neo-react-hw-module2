import styles from './Options.module.css'

export default function Options({ onFeedback, onReset, total }) {
    return (
        <div className={styles.wrapper}>
            <button className={`${styles.button} ${styles.good}`} onClick={() => onFeedback('good')}>
                Good
            </button>
            <button className={`${styles.button} ${styles.neutral}`} onClick={() => onFeedback('neutral')}>
                Neutral
            </button>
            <button className={`${styles.button} ${styles.bad}`} onClick={() => onFeedback('bad')}>
                Bad
            </button>
            {total > 0 && (
                <button className={`${styles.button} ${styles.reset}`} onClick={onReset}>
                    Reset
                </button>
            )}
        </div>
    )
}
