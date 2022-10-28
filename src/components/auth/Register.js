import React from 'react'

export default function Register() {
    return (
        <section class="vh-100">

            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://www.linkpicture.com/q/Cross-platform-software-amico.png"
                            class="img-fluid" alt="Sample image" />
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <h3>Register</h3>
                        <form>

                            <div class="form-outline mb-3">
                                <input type="text" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Name" required
                                />
                            </div>
                            <div class="form-outline mb-3">
                                <input type="email" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Email" required
                                />
                            </div>



                            <div class="form-outline mb-3">
                                {/* <PhoneInput 
                                    placeholder="Enter Phone Number" type="textarea" class="form-control" id="validationTooltip03"
                                    value={phoneno}
                                    onChange={setphoneno}/> */}


                                <input type="number" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Phone Number" required
                                />
                            </div>


                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Password" required
                                />
                            </div>
                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Confirm Password" />
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2 d-flex justify-content-start">
                                <button type="button" class="btn btn-primary btn-lg"
                                > Register</button>

                                <p class="small fw-bold mt-2 pt-1 mb-0 mx-5">Already have account? <a href="/"
                                    class="link-danger">Login</a></p>
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
