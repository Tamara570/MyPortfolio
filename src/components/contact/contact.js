import React from 'react'
import './contact.css'


class Contact extends React.Component {
    render() {
        return(
            <div className="Contact">
                <section className="reachout" id="email">
                    <h1>Contact Me</h1>
                    <p>Email me <a href="mailto:tamaralw115@gmail.com" className="email-link">here</a>.</p>
                    <p>Take a peek at my <a href="https://github.com/Tamara570" className="git-link">Github</a>.</p>
                    <p>Connect with me on <a href="https://www.linkedin.com/in/tamara-walker" className="social-link">LinkedIn</a></p>
                </section>
            </div>
        )
    }
}

export default Contact