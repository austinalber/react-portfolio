import React, { Component } from "react";
import "./style.css"

class Home extends Component {

    render() {
        return(
            <div id="main-container" class="container">
                <section class="main-section">
                    <h1>About Me</h1>
                    <img src="assets/images/austin.jpg" class="auth-image" alt="Austin Alber"/>
                    <p id="top-para">My name is Austin Alber, I am a 22 year old student currently persuing a degree in Aerospace Engineering while also attending UCF's Coding Bootcamp. I am currently enrolled at University of Central Florida and plan to graduate in May of 2020.</p>
                    <p id="bottom-para">Some hobbies of mine include: playing recreational soccer, practicing guitar, fishing along the Eastern coast of Florida, and relaxing on the beach with friends.</p>
                </section>
            </div>
        );
    }
}

export default Home;