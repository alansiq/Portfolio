import React from 'react';
import './styles.css';
import Rocketseat from '../../assets/rocketseat.png';
import Alura from '../../assets/alura.png';
import Origamid from '../../assets/origamid.png';

interface Props {
    data?: [],
}

const skills = [
    {
        flag: `${Rocketseat}`,
        school: 'Rocketseat',
        course: 'GoStack BootCamp',
        status: false,
        desc: 'TypeScript, React Native, React.JS, Node.JS e mais...',
        projects: '#',
        certification: 'https://alansiqueira.com/',
    },
    {
        flag: `${Alura}`,
        school: 'Alura',
        course: 'GoStack BootCamp',
        status: true,
        desc: 'TypeScript, React Native, React.JS, Node.JS e mais...',
        projects: '#',
        certification: '#',
    },
    {
        flag: `${Origamid}`,
        school: 'Origamid',
        course: 'GoStack BootCamp',
        status: true,
        desc: 'TypeScript, React Native, React.JS, Node.JS e mais...',
        projects: '#',
        certification: '',
    },
];


const SkillsList = (props: Props) => {
    const getSkills = props.data ? props.data : skills;

    return (
        <>
            {getSkills.map(skill => (

                <div className="skill_card__default">
                    <div className="skill_card_col1">
                        <img src={skill.flag} alt={skill.flag} />
                    </div>
                    <div className="skill_card_col2">
                        <div className="skill_card_row row1">
                            <h3 className="skill_school">{skill.school}</h3>
                            <h3 className="skill_course">{skill.course}</h3>
                            <p className={skill.status ? 'skill_status skill_status__active' : 'skill_status skill_status__inactive'}>{skill.status ? 'Concluido' : 'Cursando'}</p>
                        </div>
                        <div className="skill_card_row row2">
                            <p className="skill_desc">{skill.desc}</p>
                        </div>
                        <div className="skill_card_row">
                            {skill.projects ? (<a className="skill_link" href={skill.projects}>Ver projetos</a>) : ('')}
                            {skill.certification ? (<a className="skill_link" href={skill.certification}>Certificado</a>) : ('')}
                        </div>
                    </div>
                </div>

            ))}
        </>
    )

}

export default SkillsList;