import { setLoadingState } from "@/redux/loadingSlice";
import { useAppDispatch } from "@/redux/store";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import { user } from "@/apis";
import Typography from '@mui/material/Typography';
import { addUsers } from "@/redux/usersSlice";

const AuthUpdater = () => {
    const dispatch = useAppDispatch();

    const handleGetAllUsers = () => {
        try {
            user.getAllUsers().then((res: any) => {
                dispatch(addUsers(res.data))
            })
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="">
            <Button variant="contained"
                onClick={() => dispatch(setLoadingState(true))}
            >    Log in
            </Button>
            <Button variant="contained"
                onClick={() => dispatch(setLoadingState(false))}
            >     Log out
            </Button>
            <Button variant="contained"
                onClick={() => handleGetAllUsers()}
            >     Get All DAta
            </Button>
            <Typography variant="body1" >
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>
        </div>
    );
};

export default AuthUpdater;