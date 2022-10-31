import React from "react"

export default function Main() {
    return (
        <main>
            <div className="main--intro">
                <h3>Muhammad Reza</h3>
                <h5>Frontend Developer</h5>
                <p>rezaazimi.website</p>
            </div>
            <div className="main--linkedbutton">
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="btn btn-email"> <i class="fa-solid fa-envelope"></i>Email</a>
                <a href="https://www.linkedin.com/in/muhammadreza-azimi-17a923227/" className="btn btn-linkedin"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
            <div className="main--Details">
                <h1>About</h1>
                <p>I am a frontend developer with a particular interest 
                    in making things simple and automating daily tasks. 
                    </p>
                <h1>Interests</h1>
                <p>Food expert. Music scholar. Reader. Internet fanatic. 
                   Bacon buff. Entrepreneur.</p>
            </div>
        </main>
    )
}