/* eslint-disable react/prop-types */
import './SkillsCardInfo.scss';
import React from 'react';

const SkillsCardInfo = ({ heading, skills }) => {
  return (
    <div className='skills__info__card'>
      <h6>{heading}</h6>
      <div className="skills_info_content">
        {
          skills.map((item, index) => {
            return (
              <React.Fragment key={`skill${index}`}>
                <div className="skills_info">
                  <p>{item.skill}</p>
                  <p className="percentage">{item.percentage}</p>
                </div>

                <div className="skills_progress_bg">
                  <div className="skill_progress" style={{width: item.percentage}}></div>
                </div>
              </React.Fragment>
            );
          })
        }
      </div>
    </div>
  );
}

export default SkillsCardInfo;
