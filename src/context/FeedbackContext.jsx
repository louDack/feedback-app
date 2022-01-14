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

    return <FeedbackContext.Provider value={{
        feedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext