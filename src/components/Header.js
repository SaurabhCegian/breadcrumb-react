import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import Constant from '../constant/Constant';

export default class Header extends Component {
  render() {
    return (
      <div>
        
            <div>
              <ul>
                {
                    Constant.map(row => {
                        console.log(row.path+" "+row.component)
                        return <li><Link to = {row.path}>{row.component}</Link></li> 
                    })
                }
              </ul>
              <hr/>
            </div>
        
      </div>
    )
  }
}
