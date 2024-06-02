"use client";

import { setAuthState } from "@/redux/authSlice";
import { useAppDispatch } from "@/redux/store";
import React from "react";
import Button from '@mui/material/Button';

const AuthUpdater = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="">
            <Button variant="contained"
                onClick={() => dispatch(setAuthState(true))}
            >    Log in
            </Button>
            <Button variant="contained"
                onClick={() => dispatch(setAuthState(false))}
            >     Log out
            </Button>
        </div>
    );
};

export default AuthUpdater;