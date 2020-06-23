import React from 'react';
import './styles.css';
import ParagraphTypical from '../../components/Typical/ParagraphTypical';
import BtnMain from '../../components/buttons/BtnMain';
import SkillsList from '../../components/SkillsList/index';
import Portrait from '../../assets/imgAlan.png';





const Home = () => {

    return (
        <>
            <section id="hero">

                <div className="container">

                    <ParagraphTypical
                        id="typical" content={['Product Designer', 1000, 'Front-end Developer', 1000, 'React fanatic', 1000, 'NodeJS enthusiast', 1000, 'UI/UX Designer', 500]}
                    />
                    <h1>
                        I am <strong>Alan Siqueira</strong>
                    </h1>
                    <p>
                        My duty is to transform your ideas in succesful digital products.
                    </p>
                    <BtnMain
                        text="My work"
                    />

                </div>
            </section>


            <section id="about">
                <h1 className="about_title">About me</h1>
                <div className="about_content">
                    <div className="about_content_textWrapper">
                        
                        <h2 className="about_content_textWrapper__title">Who?</h2>
                    
                        <p className="about_content_textWrapper__text" > Front-end Engineer with a UX/UI Designer mindset. I can participate in every stage of your digital product development, from discovery to development. As a UI/UX Designer, I'll cover the prototyping and research analysis stages and also develop a functional application.</p>

                        <div className="about_content_textWrapper__subtitleContainer ">
                        <h2 className="about_content_textWrapper__subtitle subtitle__active">Skills</h2>
                        <h2 className="about_content_textWrapper__subtitle">Past work</h2>
                        </div>
                        
                        <SkillsList />
                        
                    </div>


                    <div className="about_content_image">
                        <img src={Portrait} />
                    </div>

                </div>

            </section>


        </>
    )
}


export default Home;