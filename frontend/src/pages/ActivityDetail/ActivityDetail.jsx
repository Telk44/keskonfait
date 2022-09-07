import {useEffect} from "react";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from "react-redux"
import {getOneActivity} from '../../features/activities/activitySlice'
import {useParams} from "react-router-dom"
import BackButton from "../../components/BackButton"
import Spinner from "../../components/Spinner"
import '../Activity/Activity.css'

function ActivityDetail() {
    const {activity, isLoading, isError, message} = useSelector((state) => state.activities)

    const dispatch = useDispatch()
    const {activityId} = useParams() //activityId from the url
    console.log(activityId, "activityId")

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        dispatch(getOneActivity(activityId))
    }, [isError, message, activityId]);

    if (isLoading) {
        return <Spinner/>
    }

    if (isError) {
        return <h3>Quelque chose s'est mal passé</h3>
    }


    return (
        <>
            <div className='activity-container'>
                <div>
                    {activity.category}
                </div>

                <div className='activity-wrapper'>
                    <div className="activity-content">
                        <div className='activity-content-title'>
                            {activity.title}
                        </div>
                        <img className='activity-content-img' src={"http://localhost:5000/" + activity.imageURL} width="500px"></img>
                        <div className='activity-content-description'>
                            <h3>Présentation de l'activité</h3>
                            <div className='activity-content-description-txt'>
                                {activity.description}
                            </div>
                        </div>
                    </div>

                    <div className='activity-details'>
                        <h4>Dates</h4>
                        du {new Date(activity.startDate).toLocaleDateString('fr-FR')} au {new Date(activity.endDate).toLocaleDateString('fr-FR')}
                        <h4>Horaires</h4>
                        de 9h à 18h
                        <h4>Age des participants</h4>
                        {activity.age}
                        <h4>Tarifs</h4>
                        {activity.price}
                        <h4>Lieu</h4>
                        Espace Yuzu – 240 Rue de la Croix Nivert, 44000 Nantes
                        <h4>Organisateur</h4>
                        Playwell
                        <h4>Contact</h4>
                        <p>{activity.phone} </p>
                        <p>{activity.bookingEmail}</p>
                    </div>
                </div>


            </div>
            <BackButton url='/'/>
        </>
    )
}

export default ActivityDetail