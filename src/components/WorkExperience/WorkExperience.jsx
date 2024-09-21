import { useRef } from 'react'
import { WORK_EXPERIENCE } from '../../Utils/data'
import './WorkExperience.scss'
import WorkExperienceCard from './WorkExperienceCard/WorkExperienceCard'
import Slider from 'react-slick'
const WorkExperience = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sliderRight = () => {
    sliderRef.current.slickNext();
  };

  const sliderLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <section className="exprience__container" id='workExprinceSection'>
        <h5>Work Exprience</h5>
          <div className="exprience__content">

            <div className="arrow__right" onClick={sliderRight}>
              <i className="ri-arrow-right-s-line"></i>
            </div>

            <div className="arrow__left" onClick={sliderLeft}>
              <i className="ri-arrow-left-s-line"></i>
            </div>

            <Slider ref={sliderRef} {...settings}>
              {WORK_EXPERIENCE.map((item) => (
                <WorkExperienceCard key={item.title} details={item} />
              ))}
            </Slider>
          </div>
      </section>
    </>
  )
}

export default WorkExperience
