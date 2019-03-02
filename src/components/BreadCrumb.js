import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumb.css';

class BreadCrumb extends Component{
    render(){
        var data = this.props.items;
        let seprator = this.props.seprator;
        return(
            <div>
                {
                    data.map((item,index) =>{
                        return <Link style = {data.length-1 === index? {color:'black'}: {color:'#342F2F'}} to={item.path}><span>{item.component}{data.length-1 === index ? '' : seprator}</span></Link>
                    })
                }
                <hr/>
            </div>
        );
    }
}

export default BreadCrumb;