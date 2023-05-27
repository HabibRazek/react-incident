import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home'

const Nav = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg  bg-body-tertiary c1">
        <div class="container-fluid">
            <a class="navbar-brand text-white fw-bold" href="/"><svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" fill="#B98FF8" />
                <text class="fw-bold" x="20" y="60" font-size="40" fill="#fff" font-family="Arial">GI</text>
                </svg>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                </ul>
                
            </div>
        </div>
    </nav>
            <div>
                <Home />
            </div>
        </>
    )
}

export default Nav