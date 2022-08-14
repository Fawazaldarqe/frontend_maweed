import {Nav1} from './Nav1';
// import ReactDOM from "react-dom";
import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import {FooterPage} from './footer'
export  function Homepatiant(){
    return(
        <>
        <Nav1></Nav1>
        <div className='home_patiant'>
            <div className='size_image'>
        <ChangeImage/>
        </div>
        <div className='title_for_patiant'>
        <BtnGoReserv/>
        </div>
        </div>
        <p id='paragraph'>A Hospital is a place where the sick, injured and emergency case are taken for treatment. The doctors and nurses are readily available there for admitting and attending on their patients and nurses are very care fully. They are employed by the hospitals to nurse the sick back to heath.

In the nineteenth and the twenty century’s medical science made remarkable progress and the cures for almost all the diseases were found. Both in the spheres of medicine and surgery the prolonged researches were rewarded with epoch-making achievements.

The dedicated teams of doctors and nurses delivers the message of hope to their patients in the hospitals. All over the world, hospitals are built to treat and cure thousands of the sick patients. As these hospitals, there are very well-equipped facilities and expert doctors. These hospitals are considered the best places for effective treatment.

The doctors and nurses works effortlessly in doing their duties to the patients. The atmosphere in the hospitals should be pleasant so the the patient can feel comfortable.The doctor and nurses every effort for save life of patient.

However, some hospital doesn’t provide the expected service to it’s patients. They neglect their duties toward the patients. This should not happen. The doctors should always treats their patients with utmost care, considering their lives very precious.

Post</p>
        </>
    )
}

export function ChangeImage(){
    const images =['https://images.unsplash.com/photo-1633613286880-dae9f126b728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1611694449252-02453c27856a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80','https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'];
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [])

    return(
   <>
   <div className='change_image'>
            <img id='image_size' src={currentImage} />
        </div>
   </>
    )
}
export function BtnGoReserv(){
        return (<>
        <div className='test2'>
        <h3 id='Welcome'>Welcome to Maweed, we wish you a speedy recovery, you can book an appointment by clicking here.</h3>
        <Link to={'/reserv'}>
        <Button variant="outline-success">Continou</Button>{' '}
        </Link>
        </div>
        </>
        )
}