"use client";

import { setAuthState } from "@/redux/authSlice";
import { useAppDispatch } from "@/redux/store";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import { user } from "@/apis";

const AuthUpdater = () => {
    const [usersListData, setUsersListData] = useState([])

    const dispatch = useAppDispatch();

    const handleGetAllUsers = () => {
        try {
            user.getAllUsers().then((res: any) => {
                setUsersListData(res.data)
            })
        }
        catch (err) {
            console.error(err)
        }
    }

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
            <Button variant="contained"
                onClick={() => handleGetAllUsers()}
            >     Get ALl DAta
            </Button>

            {usersListData.map((eachCategory: any) => (
                <div key={eachCategory}>{eachCategory.name}</div>
            ))}
        </div>
    );
};

export default AuthUpdater;