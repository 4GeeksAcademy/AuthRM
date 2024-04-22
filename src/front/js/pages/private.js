import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
    return(
        <div>
            <div>This is a private page</div>
            <button onClick={() => {
                actions.logout()
                navigate("/login")
            }}>Log Out</button>
        </div>
    )
}