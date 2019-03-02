import React from 'react';
import Header from './Header';
import BreadCrumb from './BreadCrumb';

const homeData = [
    {
        id: 1,
        component: "Home",
        path: "/"
    }
]

const Home = () => (
    <div>
        <Header />
        <BreadCrumb items={homeData} seprator= ' / '/>
     <hr/>
    </div>
    
  );

export default Home;