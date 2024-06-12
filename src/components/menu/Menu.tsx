import { Link } from "react-router-dom"
import "./menu.scss";
import {menu} from "../../Data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map(menu =>

      <div className="item" key={menu.id}>
        <span className="title">{menu.title}</span>
        {menu.listItems.map(item =>

        <Link to={item.url} className="listItem" key={item.id}>
          <img src={item.icon} alt="" />
          <span className="listItemTitle">{item.title}</span>
        </Link>
        
        )}
      </div>
      )}
      
    </div>
  )
}

export default Menu