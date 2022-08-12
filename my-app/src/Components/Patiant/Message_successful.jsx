import { GrLike } from 'react-icons/gr';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function Messagesuccessful(){
    return(
        <>
        <div className='message_reserv_btn'>
        <div className='message_reserv'>
            <GrLike size={50} color='blue'/>
        <h1>Thank you for your reservation. We wish you well</h1>
        <Link to={'/'}>
        <Button  variant="primary">Back to home Page</Button>{' '}
        </Link>
        </div>
        <div className='btn_back_class'>
        </div>
        </div>
        </>
    )
}