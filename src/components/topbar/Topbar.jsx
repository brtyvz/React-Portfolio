import "./topbar.scss"
import { FiMail,FiLinkedin,FiGithub} from "react-icons/fi";
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    // menuOpen true ise aktif oluyo
    <div className={"topbar " + (menuOpen && "active")}>
<div className="wrapper">
<div className="left">
{/* logo is here */}

<a href="#intro" className="logo">Berat Yavuz</a>


<div className="itemContainer">

<FiMail className="icon"/>
<span>beratttyavuzz@gmail.com</span>

<a href="https://www.linkedin.com/in/berat-yavuz/" target="_blank" className="link">
<FiLinkedin className="icon"/>
</a>

<a href="https://github.com/brtyvz" target="_blank" className="link">
<FiGithub className="icon"/>
</a>


</div>

</div>

<div className="right">
{/* burası  tıklanıldığı zaman setMenuOpen Çalışacak true false yapacak */}
<div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
<span className="line1"></span>
<span className="line2"></span>
<span className="line3"></span>

</div>


</div>
</div>

    </div>
  )
}
