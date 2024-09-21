import './SkillCard.scss'
/* eslint-disable react/prop-types */
const SkillCard = ({title, iconUrl, isActive, onClick}) => {
  return (
    <div className={`skills__card ${isActive ? "active" : ""}`} onClick={() => onClick()}>
      <figcaption className="skill__icon">
        <img src={iconUrl} alt={title} />
      </figcaption>

      <span>{title}</span>      
    </div>
  )
}

export default SkillCard
