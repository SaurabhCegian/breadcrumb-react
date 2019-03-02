import React, { Component } from 'react';
import BreadCrumb from './BreadCrumb';
import Header from './Header';

const dashbordData = [
    {
        id: 1,
        component: "Home",
        path: "/"
    },
    {
        id: 2,
        component: "Dashbord",
        path: "/dashbord"
    }
]

class Dashbord extends Component{

    render(){
        
        return(
            <div>
                <Header />
                <BreadCrumb items={dashbordData} seprator= ' > '/>
            </div>
        );
    }
}

export default Dashbord;