import { MdHome } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import './index.css'


const Navbar = ()=>{
    return (
        <ul className="nav-container">
            <li className="list-tems">
              <MdHome className="home-icon"/>
              <p>Home</p>
            </li>
            <li className="list-tems" style={{marginBottom:'20px'}}>
              <PiDotsNineBold className="home-icon"/>
              <p>Dashboard</p>
            </li>
            <li className="list-tems" style={{fontWeight:"bold"}}>Services</li>
            <li className="list-tems">Airports</li>
            <li className="list-tems" style={{marginBottom:'25px'}}>videos</li>
            <li className="list-tems" style={{fontWeight:"bold"}}>Others</li>
            <li className="list-tems">List 1</li>
            <li className="list-tems">List 2</li>
            <li className="list-tems">List 3</li>
            

        </ul>
    )
}

export default Navbar