import {GrLanguage} from "react-icons/gr";
import {WiMoonWaningCrescent2} from "react-icons/wi";
import {BiUser} from "react-icons/bi";
import {AiOutlineMenu} from "react-icons/ai";
import { Link } from 'react-router-dom';

export function Nav1(){
    return(
        <>
        <div className='background_nav1'>
        <nav className='nav1'>
            <div className='left_nav1'>
            <img id='logo_nav' src="8ee5f92d56f04c9b8dea45d00205ec3e (1).png" alt="" />
           <  GrLanguage  size={25}/>
               <select className='language_option'>
                   <option value="English">E</option>
                   <option value="Arabic">ع</option>

           </select>
           </div>
           <div className='right_nav'>
           <WiMoonWaningCrescent2 size={30} />

               <BiUser size={25}/>
               <Link to={'/login'}>
               <button id='signin_btn'>login</button>
               </Link>
               <AiOutlineMenu size={30}/>
           </div>
           
        </nav>
        </div>
        </>
    )
}