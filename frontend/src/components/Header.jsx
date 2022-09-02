import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import logo from "../assets/logo.png"
import {useSelector, useDispatch} from "react-redux";
import {logout, reset} from '../features/auth/authSlice'

export default function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='header'>
            <div className="logo">
                <Link to='/'> <img className="headerLogo" src={logo} alt="Logo" width="200px"/></Link>
            </div>
            <ul>
                {user ? (<>
                        <li>
                            <Link to="/activities">Mes Activités</Link>
                        </li>
                        <li>
                            <Link to="/account">Mon compte</Link>
                        </li>
                        <li>
                            <button className="btn" onClick={onLogout}><FaSignOutAlt/>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'>
                                <FaSignInAlt/> Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <FaUser/> Register
                            </Link>
                        </li>
                    </>)
                }

            </ul>
        </header>
    )
}