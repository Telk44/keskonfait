import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from "react-icons/fa";

export default function Account() {
    return (
        <>
            <section className="heading">
                <h1> Mon compte </h1>
            </section>
            <Link to='/new-activity' className='btn btn-reverse btn-block'>
                <FaQuestionCircle/> Créer une nouvelle activité
            </Link>
            <Link to='/activities' className='btn btn-block'>
                <FaTicketAlt/> Voir mes activités
            </Link>
            <div  className='btn btn-block'> infos de mon compte qui seront dessous</div>
        </>
    )
}