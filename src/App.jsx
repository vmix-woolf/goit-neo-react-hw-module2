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

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad

    return (
        <div className="container">
            <h1>Sip Happens Café</h1>
            <p>Please leave your feedback about our service by selecting one of the options below.</p>

            <Options onFeedback={updateFeedback} />

            {totalFeedback > 0 ? (
                <Feedback values={feedback} total={totalFeedback} />
            ) : (
                <Notification />
            )}
        </div>
    )
}
