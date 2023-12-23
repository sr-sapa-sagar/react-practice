import React from 'react'
import v from './vue.png'
import './components/Services.css'



export default function Contact() {
    const style = {
        h1:{color:'white',textDecoration:'under'},
        p:{color:'voilet'},
        div:{padding:50,backgroundColor:'#ccc',borderRadius:10}
    
    }
  return (
    <div>
       <div style={style.div} className='services-section'>
       <h1 style={style.h1}>services</h1>
        <p style={style.p}>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make loreum ipsum.
 </p>
 <img src={v} width={200} />
       </div>
    </div>
  )
}