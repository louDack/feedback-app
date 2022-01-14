import React from 'react'
import '../index.css'
import { FaChromecast } from "react-icons/fa"
import Card from './Card'

const FeedbackItem = ({ feedback, deleteFeedback }) => {
    return (
        <Card>
            <div className="rating">{feedback.rating}</div>
            <button className="delete-card" onClick={() => deleteFeedback(feedback.id)}>
                <FaChromecast style={{color: 'black'}}/>
            </button>
            <div style={{color: 'blue'}}>{feedback.text}</div>
        </Card>
    )
}

export default FeedbackItem