import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import { featuredPortfolio,mobilePortfolio,webPortfolio,contentPortfolio,designPortfolio } from "../../data";

export default function Portfolio() {
  const [selected,setSelected]=useState("featured");
  const [data,setData]= useState([]);
  const list = [

    {
      id: "featured",
      title: "Featured",
    },
    // {
    //   id: "slides",
    //   title: "Slides",
    // },
    {
      id: "content",
      title: "Slides",
    },
  ];


//selected güncelleneceği zaman useEffect çalışacak
  useEffect(()=>{

    switch(selected)
{

case "featured":
setData(featuredPortfolio);
break;

case "web":
setData(webPortfolio);
break;

case "mobile":
setData(mobilePortfolio);
break;

case "design":
setData(designPortfolio);
break;

case "content":
setData(contentPortfolio);
break;

default:
setData(featuredPortfolio);

}



  },[selected])


  return (


    <div className="portfolio" id="portfolio">

<h1>Portfolio</h1>
<ul>

{list.map((item) => (<PortfolioList id={item.id} active={selected===item.id} setSelected ={setSelected} title={item.title} link={item.link}/>))}

</ul>
<div className="container">
{data.map(d=>(
<div>

<a  href={d.link} target="_blank" className="item" >

<img src={d.img} alt=""/>

<h3>{d.title}</h3>
</a>

</div>


))}
</div>

</div>



    
  )
}
