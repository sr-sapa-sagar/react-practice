import React from 'react'

export default function page(props) {
    const style = {
        h1:{color:'black',textDecoration:'under'},
        p:{color:'black'},
        div:{padding:50 ,backgroundColor:'#ccc',borderRadius:10, marginBottom:20}
    
    }
  return (
    <div>
        <div style={style.div}>
        <h1 style={style.h1}>{props.titel}</h1>
        <p style={style.p}>{props.content}</p>
        <img src={props.img} />
        </div>
    </div>
  )
}
