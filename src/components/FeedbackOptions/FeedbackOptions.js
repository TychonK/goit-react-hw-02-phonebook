import './Feedback.scss'
export function FeedbackOptions({ handleIncrementBad, handleIncrementGood, handleIncrementNeutral }) {
    return (
        <div className="buttons-box">
            <button onClick={handleIncrementGood} className="add-button good">Good</button>
            <button onClick={handleIncrementNeutral} className="add-button neutral">Neutral</button>
            <button onClick={handleIncrementBad} className="add-button bad">Bad</button>
        </div>
    )
}