import React from 'react'
import '../index.css'
import { FaChromecast } from "react-icons/fa"
import Card from './Card'

const FeedbackItem = ({ feedback, reverse, deleteFeedback }) => {
    
    return (
        <Card>
            <div className="rating">10</div>
            <button className="delete-card" onClick={() => deleteFeedback(feedback.id)}>
                <FaChromecast />
            </button>
            <div className="text-display">{feedback.name}</div>
        </Card>
    )
}

export default FeedbackItem

FeedbackItem.defaultProps = {
    reverse: true
}