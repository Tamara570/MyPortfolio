import React from 'react'
import Screenshot from '../../imgs/Screenshot.png'
import Screenshot2 from '../../imgs/Screenshot2.png'
import Screenshot3 from '../../imgs/Screenshot3.png'
import './projects.css'


class Projects extends React.Component {
    render() {
        return(
            <div className="Projects">
                <section className="individual" id="work">
                    <h3>Quiz App</h3>
                    <img src={Screenshot} alt="quiz app screenshot" className="image" width= "100%" />
                    <p>This is one of the first apps i've ever created. It is a very simple quiz 
                        about makeup and its about 5 questions long. Once you click the start button on the first page,
                        you will be able to glide seamlessly through each of the 5 questions. After answering each one,
                        the app will alert you as to whether you got the answer right or wrong. Your score is displayed throughout
                        the quiz as well as at the end, with the option to retake it if you wanted another shot! This app was created
                        for anyone who has an interest in the makeup and beauty industry. I built it because make-up is my favorite thing
                        to do outside of coding, so i figured it would be a great topic to base an app off of.
                        I built this quiz to test my skills with Javascript, HTML, and CSS. Feel free to give it a shot!
                        <br />
                        <a href="https://github.com/Tamara570/quiz-app.git" className="repo-link link">Repo</a> | <a href="https://tamara570.github.io/quiz-app/" className="live-link link">Live</a>
                    </p>
                </section>
                <section className="individual" id="work">
                    <h3>Homeschool Your Kids!</h3>
                    <img src={Screenshot2} alt="quiz app screenshot" className="image" width= "100%" />
                    <p>Designed an app with my partner to assist parents with homeschooling their children. It allows parents to search 
                        any word or topic and they will be provided with a general definition as well as educational videos for both the 
                        parent and child to watch. We used the Wikipedia and Youtube APIs to achieve this as well as HTML, CCS, and Javascript
                        <br />
                        <a href="https://github.com/Tamara570/Homeschool-App" className="repo-link link">Repo</a> | <a href="https://tamara570.github.io/Homeschool-App/" className="live-link link">Live</a>
                    </p>
                </section>
                <section className="individual" id="work">
                    <h3>Euphoria</h3>
                    <img src={Screenshot3} alt="quiz app screenshot" className="image" width= "100%" />
                    <p>Created and designed a mental health and wellness app. The app gives users the ability to blog their thoughts and either 
                        post them to our public blog page or save it to their private notes. There’s a section for guided meditation, yoga, and 
                        relaxation videos as well as a section with resources for people having a mental health crisis. App has authentication 
                        so users can log in and create an account. I used React/React Router, Node, Express, PostgreSQL, HTML, CSS, JavaScript, and RESTful APIs
                        to complete this app.
                        <br />
                        Repos: <a href="https://github.com/Tamara570/Euphoria-client" className="repo-link link">Client</a>/<a href="https://github.com/Tamara570/Euphoria-api" className="repo-link link">Server</a> | <a href="https://euphoria-client.vercel.app/" className="live-link link">Live</a>
                    </p>
                </section>
        </div>
        )
    }
}

export default Projects