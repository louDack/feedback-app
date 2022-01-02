import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({data}) => {
    return (
        <div>
            {console.log(data)}
            {data.map(feedback => {
                // return <div key={feedback.id}>{feedback.name}</div>
                return <FeedbackItem key={feedback.id} feedback={feedback} />
            })}
        </div>
    )
}

export default FeedbackList
