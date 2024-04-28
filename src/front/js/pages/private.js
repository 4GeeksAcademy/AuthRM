import React from "react";
import { useEffect , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/private.css";

export const Private = () => {

    const navigate = useNavigate()
    const { store, actions } = useContext(Context);

    function VerifyToken () {
        const token = localStorage.getItem("jwt-token")
        if (token == ""){
            navigate("/login")
        }
    }

    useEffect(() => {
        VerifyToken()
      }, []);
    
    return(
        <div>
            <h1 className="private-text">¡Hello, this is a private page!</h1>
            
        </div>
    )
}