import {Link} from "react-router-dom";

export default function Footer() {

    return (
        <>
        <header className='footer'>
            <ul>
                  <li>
                      <Link to="#">Mentions légales</Link>
                  </li>
                  <li>
                      <Link to="#">Contact</Link>
                  </li>
                  <li>
                      <Link to="#">Règles de diffusion</Link>
                  </li>

            </ul>
        </header>
        </>
    )
}