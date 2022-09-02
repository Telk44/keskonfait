import ActivityTeaser from "../../components/ActivityTeaser/ActivityTeaser";
import {useSelector, useDispatch} from "react-redux"
import {getAllActivities, reset} from "../../features/activities/activitySlice"
import Spinner from "../../components/Spinner"
// import {Link} from 'react-router-dom'
// import {FaQuestionCircle, FaTicketAlt} from "react-icons/fa";
import {useEffect} from "react";
import "./Home.css"

export default function Home() {
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

    useEffect((data) => {
        dispatch(getAllActivities())
    }, [dispatch])


    if (isLoading) {
        return <Spinner/>
    }

    return (

            <div className="listActivities-form_wrapper ">
                <div className="listActivities-form_header">
                    <div className="listActivities-title">
                         Liste des activités
                    </div>
                </div>
                <div className="listActivities-items teasersGrid">
                    {activities.map((activity) => (
                        <ActivityTeaser key={activity.id} activity={activity}/>
                    ))}
                </div>
            </div>


    )
}