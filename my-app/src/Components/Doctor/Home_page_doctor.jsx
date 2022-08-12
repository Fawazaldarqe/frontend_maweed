import { Link } from 'react-router-dom'
import {ChangeImage} from '../Patiant/Home_patiant'
import {Nav2} from './Nav2'
export function HomeDoctor(){
    return(
        <>
        <Nav2/>
        <h1>Home page doctor</h1>
        <ChangeImage/>
        <PagesDoctor/>
        </>
    )
}
export function PagesDoctor(){
    return(
        <>
        <div className='body_page_doctor'>
            <div className='history_and_show_reserv'>
                <Link to={'/'}>
                    <img src="8ee5f92d56f04c9b8dea45d00205ec3e (1).png" alt="" />
                </Link>
                <Link to={'/'}>
                    <img src="8ee5f92d56f04c9b8dea45d00205ec3e (1).png" alt="" />
                </Link>
            </div>
            <div className='checkfile_and_emergency'>
            <Link to={'/'}>
                    <img src="8ee5f92d56f04c9b8dea45d00205ec3e (1).png" alt="" />
                </Link>
                <Link to={'/'}>
                    <img src="8ee5f92d56f04c9b8dea45d00205ec3e (1).png" alt="" />
                </Link>
            </div>
        </div>
        </>
    )
}