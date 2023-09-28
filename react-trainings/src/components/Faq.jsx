import { useState } from 'react'
import {BsPlus} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'


const Faq = ({question, answer}) => {
    const [isAnswerShowing, setIsAnswerShowing] =useState(false)
  return (
    <article className='faq' onClick={() => setIsAnswerShowing (prev => !prev)}>
        <div>
            <h4>{question}</h4>
            <button className='faq__icon'>
                {
                    isAnswerShowing ? <BiMinus /> : <BsPlus/> 
                    
                }
            </button>
        </div>
        {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default Faq