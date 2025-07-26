import { useState } from 'react'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

export default function App() {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    })

    const updateFeedback = (feedbackType) => {
        setFeedback(prev => ({
            ...prev,
            [feedbackType]: prev[feedbackType] + 1,
        }))
    }

    const resetFeedback = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 })
    }

    const { good, neutral, bad } = feedback
    const totalFeedback = good + neutral + bad
    const positiveFeedback = totalFeedback > 0
        ? Math.round((good / totalFeedback) * 100)
        : 0

    return (
        <div className="container">
            <h1>Sip Happens Café</h1>
            <p>Please leave your feedback about our service by selecting one of the options below.</p>

            <Options
                onFeedback={updateFeedback}
                onReset={resetFeedback}
                total={totalFeedback}
            />

            {totalFeedback > 0 ? (
                <Feedback
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={totalFeedback}
                    positive={positiveFeedback}
                />
            ) : (
                <Notification />
            )}
        </div>
    )
}
