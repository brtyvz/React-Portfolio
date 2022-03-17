import "./portfolioList.scss";

export default function portfolioList({title,active,setSelected,id}) {
  return (
    <li onClick={()=>{setSelected(id)}} className={active ? "portfolioList active": "portfolioList"}>
{title}

    </li>
  )
}
 