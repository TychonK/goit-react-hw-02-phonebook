import './Statistics.scss'
export function Statistics({ good, neutral, bad, total, percentage }) {
    return (
        <div className="stats-box">
            <span>Good: { good } </span>
            <span>Neutral: { neutral } </span>
            <span>Bad: {bad} </span>
            <span>Total: {total} </span>
            <span>Positive Feedback: {percentage}%</span>
        </div>
 )
}