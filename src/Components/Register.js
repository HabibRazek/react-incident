import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { ReactComponent as Registerr } from '../assets/register.svg';
const Register = () => {
    return (
        <>

            <div class="container register">
                <div class="contact__wrapper shadow-lg mt-n9">
                    <div class="row no-gutters">
                        <div class="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                            <h3 class="color--white mb-5">Create your account </h3>
                            <Registerr height="350px" />
                        </div>

                        <div class="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                            <form action="#" class="contact-form form-validate mt-5" novalidate="novalidate">
                                <div class="row">
                                    <h2 class="mb-4">Fill the form :</h2>
                                    <div class="col-sm-6 mb-3">
                                        <div class="form-group">
                                            <label class="required-field" for="firstName">First Name</label>
                                            <input type="text" class="form-control" id="firstName" name="firstName" ></input>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 mb-3">
                                        <div class="form-group">
                                            <label for="lastName">Last Name</label>
                                            <input type="text" class="form-control" id="lastName" name="lastName" ></input>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 mb-3">
                                        <div class="form-group">
                                            <label class="required-field" for="email">Email</label>
                                            <input type="text" class="form-control" id="email" name="email" ></input>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 mb-3">
                                        <div class="form-group">
                                            <label for="phone">Password</label>
                                            <input type="password" class="form-control" id="phone" name="phone"></input>
                                        </div>
                                    </div>


                                    <div class="col-sm-12 mb-3 position-relative">
                                        <button type="submit" name="submit" class="btn btn-primary mt-3 position-absolute top-0 end-0">Sign up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register