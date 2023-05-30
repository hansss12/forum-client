import Register from '../components/Register'
import registerImg from '../assets/register.jpg'

export default function RegisterImg() {
    return (
        <>
            <div className="grid grid-cols-2">
                <Register />
                <img src={registerImg} alt="register" className='mt-20'/>
            </div>
        </>
    );
}
