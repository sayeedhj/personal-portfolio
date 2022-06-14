import React from 'react';
import './Introduction.css'
import me from '../../Image/IMG_9327-removebg.png'

const Introduction = () => {
    return (
        <div className='introduction'>
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className='intro'>Hello, My Name Is</h2>
                    <h1 className='intro-name'>Sayeed Hasan</h1>
                    <div className='intro-title'>
                        <div className='i-title-wrapper'>
                            <div className="i-title-item">Front-end Web Developer
                            </div>

                            <br />

                            <div className="i-title-item">Content Creator
                            </div>

                            <br />


                            <div className="i-title-item">Photographer
                            </div>
                        </div>
                    </div>
                    
                    <div className="intro-description">
                            <h3>I develop websites for customer of all sizes, specializing in creating stylish, modern websites, web services and online stores</h3>
                        </div>
                </div>
            </div>



            <div className="intro-right">
                <div className='i-bg'></div>
                <img src={me} alt="" className='intro-img' />
            </div>
        </div>
    );
};

export default Introduction;