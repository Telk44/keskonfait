import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {FaUser} from "react-icons/fa"
import {useSelector, useDispatch} from "react-redux"
import {register} from '../features/auth/authSlice'
import {reset} from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

export default function Register() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        password2: ''
    })

    const {firstName, lastName, userName, email, password, password2} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate();

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
        if(password !==password2) {
           toast.error('les mots de passe ne sont pas identiques')
        } else {
            const userData ={
                firstName,
                lastName,
                userName,
                email,
                password
            }
            dispatch((register(userData)))
        }
    }
    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser/> Inscription
                </h1>
                <p> Créer un compte</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="firstName" name="firstName" value={firstName}
                               onChange={onChange} placeholder="Entrez votre prénom"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="lastName" name="lastName"  value={lastName}
                               onChange={onChange} placeholder="Entrez votre nom"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="userName" name="userName"  value={userName}
                               onChange={onChange} placeholder="Entrez votre nom d'utilisateur" required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" name="email" value={email}
                               onChange={onChange} placeholder="Entrez votre email" required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" name="password" value={password}
                               onChange={onChange} placeholder="Entrez votre mot de passe" required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password2" name="password2"
                               value={password2} onChange={onChange} placeholder="Confirmez votre mot de passe" required />
                    </div>
                    <div className="form-group">
                        <button className='btn btn-block'>Soumettre</button>
                    </div>
                </form>
            </section>
        </>
    )
}

