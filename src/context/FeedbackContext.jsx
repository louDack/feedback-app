import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'Hello from context1...',
            rating: 6
        },
        {
            id: 2,
            text: 'Hello from context2...',
            rating: 10
        },
        {
            id: 3,
            text: 'Hello from context3...',
            rating: 2
        },
    ])

    const deleteFeedback = (id) => {
        const newFeedbackList = feedback.filter((list) => list.id !== id)
        setFeedback(newFeedbackList)
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext