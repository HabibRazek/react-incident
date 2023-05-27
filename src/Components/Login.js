import React from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <div id="main-wrapper" class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <div class="card border-0">
                            <div class="card-body p-0">
                                <div class="row no-gutters">
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="mb-5">
                                                <h3 class="h4 font-weight-bold text-primary">Login</h3>
                                            </div>

                                            <h6 class="h5 mb-0">Welcome back!</h6>
                                            <p class="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>

                                            <form>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1"></input>
                                                </div>
                                                <div class="form-group mb-5">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                                </div>
                                                <button type="submit" class="btn btn-theme btn-primary mx-2 text-white">Login</button>
                                            </form>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 d-none d-lg-inline-block">
                                        <div class="account-block rounded-right img-l">
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <p class="text-muted text-center mt-3 mb-0">Don't have an account? <Link to="/register" class="text-primary ml-1">register</Link></p>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Login