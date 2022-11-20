import "./contact.scss"
import { FaGithub } from "react-icons/fa";
import { useRef,useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef()
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    //emailJs
    emailjs.sendForm('service_v5wai8p', 'template_fokup2i', formRef.current, 'I15mwvx5nIFM1it50')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    formRef.current.reset();
  }
  return (
    <div className="c"id="contact">
    <div className="c-bg"></div>
    <div className="c-wrapper">
      <div className="c-left">
      <img src = "assets/shake.svg"/>
      </div>
      <div className="c-right">
        <p className="c-desc">
        <h1> <b>Contact Me </b> </h1>  
        </p>
        <form ref = {formRef} onSubmit={handleSubmit}>
          <input style={{backgroundColor: "#e6e9ee00"}} type="text" placeholder="Name" name="user_name" />
          <input style={{backgroundColor: "#e6e9ee00"}} type="text" placeholder="Subject" name="user_subject" />
          <input style={{backgroundColor: "#e6e9ee00"}} type="email" placeholder="Email" name="user_email" />
          <textarea style={{backgroundColor:"#e6e9ee00"}} rows="5" placeholder="Message" name="message" />
          <button>Send</button>
        </form>
      </div>
      
    </div>
    <p className="berat">© 2022 Berat Yavuz </p>
  </div>
  
  )
}





{/* <div className='contact'id="contact">
        
<div className="left">
 <img src = "assets/shake.svg"/>
</div>

<div className="right">

<h1>Contact</h1>

<form>

<input type="text" placeholder="Email" />
<textarea placeholder="Message..."></textarea>
<button onClick={handleSubmit} type="submit">Send</button>

</form>


</div>
<div className="bottom">
<h2>dss</h2>
</div>


</div> */}



{/* <div className="wrapper">

<a target="_blank" href="https://github.com/brtyvz">

<FaGithub className="logo"/>

</a>

</div>
*/}

