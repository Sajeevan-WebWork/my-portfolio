import { useState } from "react"
import { SKILLS } from "../../Utils/data"
import SkillCard from "./SkillCard/SkillCard"
import "./Skills.scss"
import SkillsCardInfo from "./SkillsCardInfo/SkillsCardInfo"

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    // eslint-disable-next-line no-unused-vars
    const handleSelectdSkill = (data) => {
        setSelectedSkill(data);
    };

    return (
        <section className="skills__container" id="SkillsSectoion">
            <h5>Technical Proficiency</h5>
            <div className="skills__content">
                <div className="skills">
                    {SKILLS.map((item) => (
                        <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => {
                                handleSelectdSkill(item)
                            }}
                        />
                    ))}
                </div>
                <div className="skills__info">
                    <SkillsCardInfo 
                    heading={selectedSkill.title} 
                    skills={selectedSkill.skills} />
                </div>
            </div>
        </section>
    )
}

export default Skills
