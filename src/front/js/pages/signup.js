import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const SignUp = () => {

    return(
        <div>
            <h1>Sign Up</h1>
            <div className="mb-3">
                <label for="email1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email1" aria-describedby="emailHelp" name="email" ></input>
            </div>
            <div className="mb-3">
                <label for="pass1" className="form-label">Password</label>
                <input type="password" className="form-control" id="pass1" name ="password" ></input>
            </div>
            <div className="forgot">
                            <a>Already have an account?</a><br></br>
                            <button onClick={() => {
                                navigate("/Private")
                            }}>Please sign up </button>
                        </div>
        </div>
    );
}