import "./ActivityTeaser.css"
import {Link} from "react-router-dom";

function ActivityTeaser({activity}) {
    return (
        <>
            <Link to={`activity/${activity.id}`} className="activityTeaser Teaser">
                <div className="activityTeaser-type Type ">
                    {activity.category}
                </div>
                <div className="activityTeaser-img">
                    <img src={"http://localhost:5000/" + activity.imageURL} alt="" width="500px" />
                </div>
                <div className="activityTeaser-content">
                    <div className="activityTeaser-content-wrapper">
                        <div className="activityTeaser-content-title">
                            {activity.title}
                        </div>
                        <div className="activityTeaser-content-subtitle">
                            Du {new Date(activity.startDate).toLocaleDateString('fr-FR')} au {new Date(activity.endDate).toLocaleDateString('fr-FR')}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ActivityTeaser