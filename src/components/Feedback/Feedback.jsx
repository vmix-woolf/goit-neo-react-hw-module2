export default function Feedback({ values }) {
    return (
        <div>
            <p>Good: {values.good}</p>
            <p>Neutral: {values.neutral}</p>
            <p>Bad: {values.bad}</p>
        </div>
    )
}
