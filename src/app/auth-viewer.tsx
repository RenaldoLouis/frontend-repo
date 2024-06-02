"use client";

import { useAppSelector } from "@/redux/store";
import React from "react";
import Typography from '@mui/material/Typography';

const AuthViewer = () => {
    const loadingState = useAppSelector((state) => state.loading.loadingState);
    const usersState = useAppSelector((state) => state.users);
    return (
        <div>
            <div className="">
                You are now {loadingState ? "Logged  In" : "Logged Out"}
            </div>

            {usersState.map((eachCategory: any) => (
                <Typography key={eachCategory} variant="body1" >
                    {eachCategory.name}
                </Typography>
            ))}

        </div>
    );
};

export default AuthViewer;