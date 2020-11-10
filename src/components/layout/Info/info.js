import React from 'react'
import './info.css'
import Header from '../Header/Header';


export const info = () => {
    return (
        <div>
            <div>            
                <Header/>
            </div>
            <div className="main">
                <div className="basic" style={{}}>
                    <p style={{fontSize:'25px', color:'#FFFFFF', }}>Your Basic info</p>
                    <div style={{ display:'flex' , borderColor:'white' , borderTopWidth:'100px' , flexDirection:'row' }}>
                    <p1 style={{display:'flex', flex:1, fontSize:'18px', color:'#FFFFFF',}}> Name </p1>
                    <p1 style={{display:'flex', flex:2,fontSize:'18px', color:'#FFFFFF'}}>John smith</p1> 
                    
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
