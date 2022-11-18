import "./intro.scss"
import {init}from"ityped"
import { useEffect,useRef } from "react"
export default function Intro() {
const textRef = useRef();

  //sadece bir defa çalışacak
  useEffect(()=>{
    const myElement = document.querySelector('#myElement')
      init(textRef.current, { showCursor: true,backDelay:1500,backSpeed:60, strings: ['React.js', 'iOS' ] })
  },[])
  return (
    <div className="intro" id="intro">
<div className="left">
  <div className="imgContainer">

     <img src="assets/berat.png"alt=""></img> 

  </div>
</div>
<div className="right">
<div className="wrapper">
  <h2>Hi There I'am </h2>
  <h1>Berat Yavuz</h1>
  <h3><span ref={textRef}> </span > Developer</h3>
</div>
<a href="#portfolio">
  <img src="assets/down.png"></img>
</a>

</div>


    </div>
  )
}
