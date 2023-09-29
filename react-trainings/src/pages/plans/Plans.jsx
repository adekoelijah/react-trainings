import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpeg'
import Card from '../../UI/Card'
import { plans } from '../../data'

import './plans.css'

const Plans = () => {
  return (
    <>
    <Header title="Plans" image ={HeaderImage}>
    Explore our diverse range of training plans, each designed to address specific fitness objectives:
    </Header>
    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features}) =>{
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1><h2>/month</h2>
              <h4>Features</h4>
              {
                features.map(({feature, available, }, index) =>{
                  return <p key={index} className={!available ? 'disable' : ''}>{feature}</p>
                })
              }
              <button className='btn lg'>Choose Plan</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans