

const SectionHead = ({icon,title, className}) => {
  return (
    <div className={'section__head testimonial__head {className}'}>
        <span>{icon}</span>
        <h2>{title}</h2>
        <h3>{className}</h3>
    </div>
  )
}

export default SectionHead