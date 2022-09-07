import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getActivities, reset} from "../features/activities/activitySlice"
import Spinner from "../components/Spinner"
import {Link} from 'react-router-dom'
import {FaQuestionCircle} from "react-icons/fa"
import ActivityItem from "../components/ActivityItem"

export default function Activities() {
    const {activities, isLoading, isSuccess} = useSelector((state) =>
        state.activities)

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])


    if (isLoading) {
        return <Spinner/>
    }

    return (

        <>
            {/*<BackButton url='/' />*/}
            <h1> Liste de mes activités </h1>

            <Link to='/new-activity' className='btn btn-reverse btn-block'>
                <FaQuestionCircle/> Créer une nouvelle activité
            </Link>
            <div className='activities'>
                <div className='activity-headings'>
                    <div>Titre</div>
                    <div>Date de publication </div>
                    <div></div>
                    {/*<div></div>*/}
                </div>
                {activities.map((activity) => (
                    <ActivityItem key={activity.id} activity={activity}/>
                ))}
            </div>
        </>
    )
}