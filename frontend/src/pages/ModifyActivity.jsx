import {useState, useEffect}from 'react'
import{useSelector, useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import {modifyActivity, reset} from "../features/activities/activitySlice"
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"

export default function ModifyActivity() {

    const {user} = useSelector((state) => state.auth)

    const {isLoading, isError, isSuccess, message} = useSelector((state) => state.activities)

    // const [userName] = useState(user.userName)

    // const [email] = useState(user.email)
    // console.log(email)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [price, setPrice] = useState('')
    const [phone, setPhone] = useState('')
    const [bookingEmail, setBookingEmail] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [ageId, setAgeId] = useState('0-5 ans')
    const [file, setFile] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess) {
            dispatch(reset())
            navigate('/activities')
        }
        dispatch(reset())
    }, [dispatch, isError, isSuccess, navigate, message] )

    const onSubmit = (e) => {
        e.preventDefault()
        const activityData ={
            categoryId,
            ageId,
            title,
            description,
            startDate,
            endDate,
            price,
            phone,
            bookingEmail,
            file
        }

        dispatch(modifyActivity(activityData))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <BackButton url='/account' />
            <section className="heading">
                <h1>Créer une nouvelle activité</h1>
                <p>Merci de remplir le formulaire ci-dessous</p>
            </section>

            <section className="form">
                {/*<div className="form-group">*/}
                {/*    <label htmlFor='name'>Organisateur</label>*/}
                {/*    <input type='text' className='form-control' value={userName} disabled/>*/}
                {/*</div>*/}

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="imageURL">Image de présentation</label>
                        <input type="file" name="imageURL" className="form-control" id="imageURL"
                               onChange={(e) => setFile(e.target.files[0])}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Catégorie de l'activité</label>
                        <select name="category" id="category" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                            <option value="">choisissez une catégorie</option>
                            <option value="1">Sport</option>
                            <option value="2">Nature</option>
                            <option value="3">Culture</option>
                            <option value="4">Créatif</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Public concerné</label>
                        <select name="ages" id="age" value={ageId} onChange={(e) => setAgeId(e.target.value)}>
                            <option value="">choisissez une tranche d'âge</option>
                            <option value="1">0-5 ans</option>
                            <option value="2">6-8 ans</option>
                            <option value="3">9-12 ans</option>
                            <option value="4">12-18 ans</option>
                            <option value="5">Adulte</option>
                            <option value="6">Tout public</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor='title'>Titre de l'activité</label>
                        <input type="Text" className="form-control" id="title" placeholder="Titre" name="title" value={title}
                               onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='description'>Description de l'activité</label>
                        <textarea name="description" className="form-control" id="description" placeholder="Description"  value={description}
                                  onChange={(e) => setDescription(e.target.value)} ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor='startDate'>Date de début de l'activité</label>
                        <input type="date" className="form-control" id="startDate" placeholder="Date" name="startDate" value={startDate}
                               onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='endDate'>Date de fin de l'activité</label>
                        <input type="date" className="form-control" id="endDate" placeholder="Date" name="endDate" value={endDate}
                               onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='price'>Tarifs de l'activité</label>
                        <input type="Text" className="form-control" id="price" placeholder="tarif" name="price" value={price}
                               onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='phone'>Téléphone</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Tel" name="phone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" value={phone}
                               onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='bookingEmail'>Email de contact</label>
                        <input type="email" className="form-control" id="bookingEmail" placeholder="mail" name="bookingEmail" value={bookingEmail}
                               onChange={(e) => setBookingEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-block">Soumettre</button>
                    </div>
                </form>
            </section>

        </>
    )
}

