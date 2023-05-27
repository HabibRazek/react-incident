import React from 'react'
import UserMenu from './UserMenu'
import { ReactComponent as Decalre } from '../assets/declare.svg';
import axios from 'axios';


const DeclareIncident = () => {
    const [name, setName] = React.useState('')
    const [subject, setSubject] = React.useState('')
    const [message, setMessage] = React.useState('')
    const[incident, setIncident] = React.useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:8000/api/incidents', { name,message,subject })
        console.log(response)
        setIncident([...incident, response.data])
        setName('')
        setSubject('')
        setMessage('')

    }



    return (
        <>
            <UserMenu />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

            <div id="contact" class="contact-area section-padding mt-3">
                <div class="container">
                    <div class="section-title text-center">
                        <h1>Declare Incident</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="contact">
                                <form class="form" onSubmit={handleSubmit}>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <input type="text" name="name" class="form-control" placeholder="Name" required="required" value={name} onChange={(e) => setName(e.target.value)}></input>
                                        </div>
                                        
                                        <div class="form-group col-md-12">
                                            <input type="text" name="subject" class="form-control" placeholder="Subject" required="required" value={subject} onChange={(e) => setSubject(e.target.value)}></input>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                        </div>
                                        <div class="col-md-12 text-center">
                                            <button type="submit" value="Send message" name="submit" id="submitButton" class="piscy" title="Submit Your Message!">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <Decalre />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeclareIncident