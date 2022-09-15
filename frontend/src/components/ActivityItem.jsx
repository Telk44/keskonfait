import {Link} from 'react-router-dom'
import {FaTrashAlt}  from "react-icons/fa";
import {FaPencilAlt}  from "react-icons/fa";

function ActivityItem({activity}) {
    console.log("activityItem" , activity)
    return (
        <div className='activity'>
            <div>{activity.title}</div>
            <div>{new Date(activity.createdAt).toLocaleString('fr-FR')}</div>
            <Link to={`/activity-org/${activity.id}`} className='btn btn-reverse btn-sm'>Voir</Link>
            <Link to={`/activity/${activity.id}`} ><FaPencilAlt /></Link>
            <Link to={`/activity/${activity.id}`} ><FaTrashAlt /></Link>
        </div>
    )
}

export default ActivityItem