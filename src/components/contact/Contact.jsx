import "./contact.scss"
import { FaGithub } from "react-icons/fa";
import { useRef,useEffect,useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef()
 
const [name,setName] = useState("");
const [subject,setSubject] = useState("");
const [email,setEmail] = useState("")
const [message,setMessage] = useState("");
const [disable,setDisable] = useState(true);




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
          <input style={{backgroundColor: "#e6e9ee00"}} type="text" placeholder="Name" name="user_name" onChange={(e)=>setName(e.target.value)}  />
          <input style={{backgroundColor: "#e6e9ee00"}} type="text" placeholder="Subject" name="user_subject" onChange={(e)=>setSubject(e.target.value)}  />
          <input style={{backgroundColor: "#e6e9ee00"}} type="email" placeholder="Email" name="user_email" onChange={(e)=>setEmail(e.target.value)} />
          <textarea style={{backgroundColor:"#e6e9ee00"}} rows="5" placeholder="Message" name="message" onChange={(e)=>setMessage(e.target.value)} />
          <button disabled={!email||!message||!subject||!name} >Send</button>
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







// const handleName=(e)=>{
//   const getName = e.target.value;
//   setName(getName);
// } 
// const handleSubject=(e)=>{
//   const getSubject = e.target.value;
//   setSubject(getSubject);
// } 
// const handleEmail=(e)=>{
//   const getEmail = e.target.value;
//   setEmail(getEmail);
// } 
// const handleMessage=(e)=>{
  
//   const getMessage = e.target.value;
//   setMessage(getMessage);
// } 