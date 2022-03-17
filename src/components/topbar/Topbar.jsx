import "./topbar.scss"
import { FiMail } from "react-icons/fi";
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    // menuOpen true ise aktif oluyo
    <div className={"topbar " + (menuOpen && "active")}>
<div className="wrapper">
<div className="left">
{/* logo is here */}

<a href="#intro" className="logo">brtyvz</a>


<div className="itemContainer">

<FiMail className="icon"/>
<span>beratttyavuzz@gmail.com</span>
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
