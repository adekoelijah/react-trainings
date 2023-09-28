

const Card = ({className, children}) => {
  return (
    <article className={'card testimonial {className} '}>
        {children} 
    </article>
  )
}

export default Card