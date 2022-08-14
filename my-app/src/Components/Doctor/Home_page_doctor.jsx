import { Link } from 'react-router-dom'
import {ChangeImage} from '../Patiant/Home_patiant'
import {Nav2} from './Nav2'
import {GrNotes} from 'react-icons/gr'
import {MdTouchApp} from 'react-icons/md'
import {FaHourglassStart,FaBriefcaseMedical} from 'react-icons/fa'

export function HomeDoctor(){
    return(
        <>
        <Nav2/>
        <div className='body_home_doctor'>
        <img  src="download.jpeg" alt="" />
        {/* <ChangeImage/> */}
        <PagesDoctor/>
        </div>
        </>

    )
}
export function PagesDoctor(){
    return(
        <>
        <div className='body_page_doctor'>
            <div className='show_history'>
            <Link to="/History_Patiant" style={{ textDecoration: 'none' }}>
                    {/* <img src="8ee5f92d56f04c9b8dea45d00205ec3e (1).png" alt="" /> */}
                    <h1 className='format_home_doctor'> <GrNotes/> Patients records</h1>
                </Link>
                </div>
                <div className="show_reserv">
                <Link to="/show_reserv" style={{ textDecoration: 'none' }}>
                    {/* <img src="8ee5f92d56f04c9b8dea45d00205ec3e (1).png" alt="" /> */}
                    <h1 className='format_home_doctor'> <FaHourglassStart/> Reservations</h1>
                </Link>
                </div>
            <div className='check_files'>
            <Link to="/check_patiant" style={{ textDecoration: 'none' }}>
                    {/* <img src="8ee5f92d56f04c9b8dea45d00205ec3e (1).png" alt="" /> */}
                    <h1 className='format_home_doctor'> <MdTouchApp/> Medical examination report</h1>
                </Link>
                </div>
                <div className="show_emergency">
                <Link to="/lll" style={{ textDecoration: 'none' }}>
                    {/* <img src="8ee5f92d56f04c9b8dea45d00205ec3e (1).png" alt="" /> */}
                    <h1 className='format_home_doctor'> <FaBriefcaseMedical/> High emergency</h1>
                </Link>
                </div>
        </div>
        </>
    )
}