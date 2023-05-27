import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { ReactComponent as Cover } from '../assets/cover.svg';
import   Footer  from '../Components/Footer'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>  
            <div class="container mt-5 d-flex ">
                <div class="col-md-6 bg-img home-desc" ><h1 class="mb-5 tc">Gestion des incidents</h1><p class="mb-0">Une application de gestion des incidents est un outil informatique conçu pour aider les organisations à gérer efficacement les incidents, qu'ils soient liés à la sécurité, aux opérations ou à tout autre domaine. L'application permet aux utilisateurs de signaler des incidents, de suivre leur résolution et de générer des rapports sur les tendances et les statistiques.</p>
                <Link to="/register"><button class="mt-4 bt" >Create an account</button></Link>
                </div>
                <Cover class="mx-5" width="550" height="550"/>
            </div>
            <Footer/>
        </>
    )
}

export default Home