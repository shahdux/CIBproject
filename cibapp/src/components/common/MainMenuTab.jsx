import React, { Component } from 'react';
import "./MainMenuTab.css"
import SmallMenuTab from './SmallMenuTab';
const MainMenuTab = () => {
    return ( 
        <div className='mainmenutab'>
            <div className='formargin'>

            <SmallMenuTab smalltabtitle="Apply Online"/>
              <SmallMenuTab smalltabtitle="News"/>
                <SmallMenuTab smalltabtitle="Blog Articles"/>
                  <SmallMenuTab smalltabtitle="CIB International"/>
                                    <SmallMenuTab smalltabtitle="Sustainable Finance"/>

                  <SmallMenuTab smalltabtitle="Awards"/>
            </div>

        </div>
     );
}
 
export default MainMenuTab;