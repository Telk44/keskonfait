import {render, screen} from '@testing-library/react'
import Footer from '../components/Footer'
import {BrowserRouter as Router} from "react-router-dom"

test('check if contact exist', () => {
    render(
        <Router>
            <Footer/>
        </Router>
    )
    const linkElement = screen.getByText('Contact')
    expect(linkElement).toBeInTheDocument()
})