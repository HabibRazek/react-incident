import React from 'react'
import { ReactComponent as Decalre } from '../assets/declare.svg';
const ModifyIncident = () => {
    return (
        <>
            
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

            <div id="contact" class="contact-area section-padding mt-3">
                <div class="container">
                    <div class="section-title text-center">
                        <h1>Modify Incident</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="contact">
                                <form class="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <input type="text" name="name" class="form-control" placeholder="Name" required="required"></input>
                                        </div>
                                        
                                        <div class="form-group col-md-12">
                                            <input type="text" name="subject" class="form-control" placeholder="Subject" required="required"></input>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required"></textarea>
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

export default ModifyIncident