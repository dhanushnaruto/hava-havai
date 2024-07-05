import Header from '../Header/index.js'
import Navbar from '../Navbar/index.js'
import { FaArrowDownLong} from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import './index.css'

const Home = () =>(
    <div className='Home-container'>
        <Header/>
        <div style={{display:'flex'}}>
            <Navbar/>
            <div className='airports-container'>
                <div className='airport-header'>
                    <h1>Airports</h1>
                    <div>
                        <button className='add-new-btn'> + Add New</button>
                    </div>
                </div>
                
                    <div className='airport-heading'>
                        <div className='airport-name-card' style={{display:'flex'}}>
                            <input type='checkbox' className='checkbox' />
                            <p className='airport-items-name' style={{fontWeight:'bold'}}>All AirPorts</p> 
                            <FaArrowDownLong className='down-arrow-icon'/>
                        </div>
                        <ul className='country-code-card'>
                            <li className='countries-name' style={{fontWeight:'bold'}}>Country</li>
                            <li className='code' style={{fontWeight:'bold'}}>code</li>
                            <li className='terminal' style={{fontWeight:'bold'}}>Terminals</li>
                        </ul>
                    </div>
                    
                
                
                <div style={{display:'flex'}}>
                <div className='airport-items'>
                    <div className='airport-name-card' style={{display:'flex'}}>
                        <input type='checkbox' className='checkbox'/>
                        <p className='airport-items-name'>Indra Ghandhi International Airport</p> 
                        
                    </div>
                    <ul className='country-code-card'>
                        <li className='countries-name' >India</li>
                        <li className='code' >DEL</li>
                        <li className='terminal' >3</li>
                    </ul>
                </div>

                <div className='edit-delete-card'>
                    <MdEdit className='edit-delete-icon'/>
                    <RiDeleteBin6Line  className='edit-delete-icon'/>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                <div className='airport-items'>
                    <div style={{display:'flex'}}>
                        <input type='checkbox' className='checkbox'/>
                        <p className='airport-items-name'>Dubai International Airport</p> 
                        
                    </div>
                    <ul className='country-code-card'>
                        <li className='countries-name' >UAE</li>
                        <li className='code' >DXB</li>
                        <li className='terminal' >5</li>
                    </ul>
                </div>
                <div className='edit-delete-card'>
                    <MdEdit className='edit-delete-icon'/>
                    <RiDeleteBin6Line  className='edit-delete-icon'/>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                <div className='airport-items'>
                    <div style={{display:'flex'}}>
                        <input type='checkbox' className='checkbox'/>
                        <p className='airport-items-name'>Healthrows AirPort</p> 
                        
                    </div>
                    <ul className='country-code-card'>
                        <li className='countries-name' >England</li>
                        <li className='code' >LHR</li>
                        <li className='terminal' >6</li>
                    </ul>
                </div>

                <div className='edit-delete-card'>
                    <MdEdit className='edit-delete-icon'/>
                    <RiDeleteBin6Line  className='edit-delete-icon'/>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                <div className='airport-items'>
                    <div style={{display:'flex'}}>
                        <input type='checkbox' className='checkbox'/>
                        <p className='airport-items-name'>Istanbal AirPort</p> 
                        
                    </div>
                    <ul className='country-code-card'>
                        <li className='countries-name' >Turkey</li>
                        <li className='code' >IST</li>
                        <li className='terminal' >3</li>
                    </ul>
                </div>

                <div className='edit-delete-card'>
                    <MdEdit className='edit-delete-icon'/>
                    <RiDeleteBin6Line  className='edit-delete-icon'/>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                <div className='airport-items'>
                    <div style={{display:'flex'}}>
                        <input type='checkbox' className='checkbox'/>
                        <p className='airport-items-name'>Rajiv Ghandhi International Airport</p> 
                        
                    </div>
                    <ul className='country-code-card'>
                        <li className='countries-name' >Texas</li>
                        <li className='code' >DFW</li>
                        <li className='terminal' >14</li>
                    </ul>
                </div>

                <div className='edit-delete-card'>
                    <MdEdit className='edit-delete-icon'/>
                    <RiDeleteBin6Line  className='edit-delete-icon'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Home