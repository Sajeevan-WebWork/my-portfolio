/* eslint-disable react/prop-types */
import './WorkExperienceCard.scss';

const WorkExperienceCard = ({details}) => {
  return (
    <>
    <div className="work__exprience__card">
      <h6>{details.title}</h6>
      <div className="work_duration">{details.date}</div>
      <ul>
        {details.responsibilites.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default WorkExperienceCard;
