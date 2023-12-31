import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpeg'

import './gallery.css'

const Gallery = () => {
  /* const Gallery = async () => { */
  const gallerylength = 15;
  const images = []

  for(let i = 1; i <= gallerylength; i++){
    /* const image = await import(`../../images/gallery${i}.jpeg`); */
    /* images.push(image.default); */
    images.push(require(`../../images/gallery${i}.jpeg`))
  }


  return (
    <>
    <Header title="Gallery" image ={HeaderImage}>
    Welcome to our Gallery of Success, a visual testament to the incredible transformations that
     our clients have achieved through dedication, hard work, 
     and the guidance of our expert trainers. Each image captured here represents not just a physical 
     change but also a journey of empowerment, health, and well-being.


    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index) =>{
            return <article key={index}>
              <img src={image} alt="gallery" />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery