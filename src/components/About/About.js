import React from 'react';
import './About.css'
import photographer from '../../Image/photographer.jpg'
import award from '../../Image/31640.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <div className="about-card about-bg"></div>
                <div className="about-card">
                    <img src={photographer} alt="" className="about-img" />
                </div>
            </div>


            <div className="about-right">
                <h1 className='about-title'>About Me</h1>
                <h4 className='about-subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing</h4>

                <p className='about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam at aperiam consequatur fugit consequuntur ut consectetur in quae ullam?</p>

                <div className='about-award'>
                   <img src={award} alt="" className="about-award-img" /> 
                   <div className="about-award-text">
                    <h4 className='about-award-title'>International Photography Contest</h4>
                    <p className="about-award-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error pariatur at dicta?
                    </p>
                   </div>

                </div>
            </div>
        </div>
    );
};

export default About;