import SectionHead from "./SectionHead"
import { useState } from "react"
import {BsFillChatQuoteFill} from 'react-icons/bs'
import Card from "../UI/Card"
import {BiSolidLeftArrowCircle, BiSolidRightArrowCircle} from 'react-icons/bi'
import { testimonials } from "../data"






const Testimonials = () => {
    const [index, setIndex] =useState(0)
    const{name, quote, job, avatar} = testimonials[index];


    const prevtestimonialHandler = () =>{
        setIndex(prev => prev -1);

        if(index <=0){
            setIndex(testimonials.length -1)
        }

    }
    const nextestimonialHandler = () =>{
        setIndex(prev => prev +1 );

        if(index >= testimonials.length -1 ){
            setIndex(0)
        }
    }


  return (
    <section className="testimonials">
        <div className="container testimonial__container">
            <SectionHead icon ={<BsFillChatQuoteFill/>} title="Testimonials"/>
            <Card className="testimonial">
                <div className="testimonial__avatar">
                    <img src={avatar} alt="avatar " />
                </div>
                <p className="testimonial__quote">{` "${quote}" `}</p>
                <h5>{name}</h5>
                <small className="testimonial__title">{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={prevtestimonialHandler}><BiSolidLeftArrowCircle/></button>
                <button className="testimonials__btn" onClick={nextestimonialHandler}><BiSolidRightArrowCircle/></button>
            </div>

        </div>
    </section>
  )
}

export default Testimonials