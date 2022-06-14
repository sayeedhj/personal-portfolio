import React from 'react';
import Product from '../Product/Product'
import './ProductList.css'
import {projects} from '../../data'
const ProductList = () => {
    return (
        <div className='product-list'>
            <div className="product-list-text">
                <h1 className='product-list-title'>Create & Inspire, It's Sayeed</h1>
                <p className='product-list-desc'>
                    Sayeed is a well known front-end web developer that you has been waiting for
                </p>
            </div>
            <div className='product-list-list'>
                {
                    projects.map(project =>(<Product
                    project={project}
                    key={project.id}
                    ></Product>))
                }
                
            </div>
        </div>
    );
};

export default ProductList;