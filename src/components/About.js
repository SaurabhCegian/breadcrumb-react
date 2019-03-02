import React, { Component } from 'react';
import BreadCrumb from './BreadCrumb';
import Header from './Header';


const aboutData = [
    {
        id: 1,
        component: "Home",
        path: "/"
    },
    {
        id: 2,
        component: "Dashbord",
        path: "/dashbord"
    },
    {
        id: 3,
        component: "Contact",
        path: "/dashbord/contact"
    },
    {
        id: 4,
        component: "About",
        path: "/dashbord/contact/about"
    }
]

class About extends Component{

    render(){
        
        return(
            <div>
                <Header />
                <BreadCrumb items={aboutData} seprator= ' > '/>
            </div>
        );
    }
}
export default About;