import aboutImg from '../images/about.jpeg'
import Title from './Title'
const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Backroads Travel Tours, we specialize in crafting unforgettable
            journeys off the beaten path. Our tours blend adventure with culture
            and luxury, leading you to the world's hidden gems and breathtaking
            landscapes.
          </p>
          <p>
            Experience travel that's intimate, authentic, and tailored to
            provide you with a trip of a lifetime. Join us and discover the
            roads less traveled.
          </p>
          <a href='#about' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
