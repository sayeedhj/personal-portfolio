import React from 'react';
import './Product.css'
const project = ({project}) => {
    const {link, img} = project;
    return (
        <div className='project'>
            <div className='project-browser'>
                <div className="project-circle"></div>
                <div className="project-circle"></div>
                <div className="project-circle"></div>
            </div>
            <a href={link} rel="noreferrer" >
                <img src={img} alt="" className='project-img' />
            </a>
        </div>
    );
};
export default project;