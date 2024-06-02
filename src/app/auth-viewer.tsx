"use client";

import { useAppSelector } from "@/redux/store";
import React from "react";

const AuthViewer = () => {
    const authState = useAppSelector((state) => state.auth.authState);

    return (
        <div className="">
            You are now {authState ? "Logged  In" : "Logged Out"}
        </div>
    );
};

export default AuthViewer;