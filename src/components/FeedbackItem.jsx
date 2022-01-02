import React from 'react'
import '../index.css'

const FeedbackItem = ({ feedback, reverse }) => {


    return (
        <div 
            className="card" 
            style={{
                backgroundColor: reverse && 'blue',
                color: reverse ? 'white' : 'yellow'
            }}
        >
            <div className="rating">10</div>
            <div className="text-display">{feedback.name}</div>
        </div>
    )
}

export default FeedbackItem

FeedbackItem.defaultProps = {
    reverse: true
}