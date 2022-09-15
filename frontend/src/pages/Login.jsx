import {useState, useEffect} from "react"
import {toast} from 'react-toastify'
import {useNavigate} from "react-router-dom";
import {FaSignInAlt} from "react-icons/fa"
import {useSelector, useDispatch} from "react-redux"
import {login, reset} from '../features/auth/authSlice'
import Spinner from "../components/Spinner"


export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        //redirect when logged in
        if(isSuccess || user) {
            navigate('/activities')
        }
        dispatch((reset))

    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }

    if(isLoading) {
        return <Spinner />
    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt/> Connexion
                </h1>
                <p> Accédez à votre compte</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" name="email" value={email}
                               onChange={onChange} placeholder="Entrez votre email" required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" name="password" value={password}
                               onChange={onChange} placeholder="Entrez votre mot de passe" required />
                    </div>
                    <div className="form-group">
                        <button className='btn btn-block'>Soumettre</button>
                    </div>
                </form>
            </section>
        </>
    )
}