import React from 'react'
import IMG_12482 from '../../imgs/IMG_12482.jpg'
import './home.css'


 class Home extends React.Component {
    render() {
        return(
            <div class="Home">
                <section className="bio" id="about-me">
                    <h1>Tamara Walker</h1>
                    <img src={IMG_12482} alt="self portrait" className="self" width="80%" />
                    <p>Good day! I am a full stack web developer based out of Atlanta, GA.
                    I am interested in this field because it challenges me in new and 
                    exciting ways everyday. If it's one thing that i've enjoyed since i was little, it's puzzles.
                    I feel like every time i take on a new project, it's like I'm being given
                    a really fun and complex puzzle to figure out. It's not always easy, but the satisfaction i feel when
                    i successfully complete the project is amazing. I can't wait to reach my full potential and join 
                    an awesome team so i can work along side some other great programmers. When I'm not busy playing with
                    code, i enjoy playing video games, reading books, cooking, and all things beauty related. Feel free 
                    to take a peek around my page and contact me if you have any questions! </p>
                </section>
            </div>
        )
    }
}

export default Home