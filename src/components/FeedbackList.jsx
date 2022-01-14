import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackList = () => {
    const {feedback: data} = useContext(FeedbackContext)

    return (
        <div>
            {data.map(feedback => {
                return <FeedbackItem key={feedback.id} feedback={feedback} />
            })}
        </div>
    )
}

export default FeedbackList
