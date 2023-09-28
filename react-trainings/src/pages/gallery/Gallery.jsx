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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Dicta at optio voluptas voluptate odio quod mollitia corporis totam, 
      laudantium non adipisci, a unde error ducimus maxime, ex necessitatibus quo? Debitis!
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