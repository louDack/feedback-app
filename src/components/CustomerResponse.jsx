import Card from "./Card"
import { useState } from "react"

const CustomerResponse = () => {
    const [text, setText] = useState('Loser')
    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Card>
            <label htmlFor="review">
                <p className='review-text'>How would you rate my service today?</p>
            </label>
            <div className="button-overlap-input">
                <input onChange={(e) => handleTextChange(e)} type="text" id="review" name="fname" value={text} className='review-textbox'/>
                
                <button type='submit' className='review-submit-btn'>Submit</button>
            </div>
        </Card>
    )
}

export default CustomerResponse

// Wrong way of placing button:
    // To use absolute and relative positioning, because input will go under
    // button.

// Correct Way:
    // Have a container that wraps input and button together.
    // Text will not go under button.
    // https://stackoverflow.com/questions/15314407/how-to-add-button-inside-input
    // Magic to think button is inside input field, but input field has no borders, only wrapper around button and input has a visible border.

// defaultValue vs value: input element error.
// Not passing event object to onChange fnction
// https://stackoverflow.com/questions/56988752/what-are-the-differences-between-defaultvalue-and-value-in-select