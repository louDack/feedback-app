import React from 'react'
import '../index.css'
import { FaChromecast } from "react-icons/fa"

const FeedbackItem = ({ feedback, reverse, deleteFeedback }) => {
    // const deleteFeedback = (id) => {
    //     console.log(`Deleting Feedback #${id}!`)
    // }

    return (
        <div 
            className="card" 
            style={{
                backgroundColor: reverse && 'blue',
                color: reverse ? 'white' : 'yellow'
            }}
        >
            <div className="rating">10</div>
            <button className="delete-card" onClick={() => deleteFeedback(feedback.id)}>
                <FaChromecast />
            </button>
            <div className="text-display">{feedback.name}</div>
        </div>
    )
}

export default FeedbackItem

FeedbackItem.defaultProps = {
    reverse: true
}