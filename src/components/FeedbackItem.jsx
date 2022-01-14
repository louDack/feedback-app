import React from 'react'
import '../index.css'
import { FaChromecast } from "react-icons/fa"
import Card from './Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ feedback }) => {
    const { deleteFeedback } = useContext(FeedbackContext)
    
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