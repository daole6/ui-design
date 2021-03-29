import React, { Component } from 'react';
import product_data from '../data/productData';

class MainContent extends Component {
    
    render() { 
        
        const listItem = product_data.map((item, index) => {
            return(
                <div className="card" key={index}>
                    <div className="card-img">
                        <img src={item.thumb}/>
                    </div>
                    <div className="card-header">
                        <h2>{item.product_name}</h2>
                        <p>{item.desc}</p>
                        <p className="price">{item.price}<span>{item.currency}</span></p>
                        <div className="btn">Add to cart</div>
                    </div>
                </div>
            );
            
            
        });
       
        return ( 
            <div className="main-content">
                <h3>Fresh Fresh</h3>
                {listItem}
            </div>
        );
    }
}
 
export default MainContent;