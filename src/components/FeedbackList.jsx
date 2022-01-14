import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackList = ({ deleteFeedback }) => {
    const {feedback: data} = useContext(FeedbackContext)

    return (
        <div>
            {data.map(feedback => {
                return <FeedbackItem key={feedback.id} feedback={feedback} deleteFeedback={deleteFeedback}/>
            })}
        </div>
    )
}

export default FeedbackList
