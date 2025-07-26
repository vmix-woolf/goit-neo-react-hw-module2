import { useState, useEffect } from 'react'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

const STORAGE_KEY = 'feedback-data'

export default function App() {
    const [feedback, setFeedback] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored
            ? JSON.parse(stored)
            : { good: 0, neutral: 0, bad: 0 }
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

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback))
    }, [feedback])

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
