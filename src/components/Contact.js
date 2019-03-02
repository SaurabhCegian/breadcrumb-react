import React, { Component } from 'react';
import BreadCrumb from './BreadCrumb';
import Header from './Header';

const contactData = [
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
    }
]

class Contact extends Component{

    render(){
        
        return(
            <div>
                <Header />
                <BreadCrumb items={contactData} seprator= ' > '/>
            </div>
        );
    }
}
export default Contact;