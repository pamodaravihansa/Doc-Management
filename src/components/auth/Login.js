import React from 'react'
import PNavBar from '../layouts/PNavBar'
import './Login.css'

export default function Login() {
  return (
    <section class="vh-100">
            <PNavBar/>
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="img src='https://www.linkpicture.com/q/Low-code-development-amico_1.png"
                            class="img-fluid" alt="Sample image" />
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                        <form>
                            <h3 mb-5>Login</h3>

                            <div class="form-outline mb-4 mt-5">
                                <input type="email" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Email" required
                                    />
                            </div>


                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Password" required />
                                    
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2 d-flex justify-content-start">
                                <button type="button" class="btn btn-primary btn-lg" >Login</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0 mx-5">Don't have an account? <a href="/reg"
                                    class="link-danger">Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div
                class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark">

                <div class="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>



                <div>
                    <a href="#!" class="text-white me-4">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" class="text-white me-4">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#!" class="text-white me-4">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="#!" class="text-white">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>

            </div>
        </section>
  )
}
