import "./contact.scss"
import { FaGithub } from "react-icons/fa";
export default function Contact() {
  const handleSubmit=(e)=>{e.preventDefault()}
  return (
    <div className='contact'id="contact">
        
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
        
        
        </div>
  )
}




{/* <div className="wrapper">

<a target="_blank" href="https://github.com/brtyvz">

<FaGithub className="logo"/>

</a>

</div>
*/}

