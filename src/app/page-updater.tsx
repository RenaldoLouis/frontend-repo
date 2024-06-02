import { setLoadingState } from "@/redux/loadingSlice";
import { useAppDispatch } from "@/redux/store";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import { user } from "@/apis";
import { addUsers } from "@/redux/usersSlice";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const PageUpdater = () => {
    const dispatch = useAppDispatch();

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');

    const handleGetAllUsers = () => {
        dispatch(setLoadingState(true))
        try {
            // set timeout to simulate loading process
            setTimeout(() => {
                user.getAllUsers().then((res: any) => {
                    dispatch(addUsers(res.data))
                    dispatch(setLoadingState(false))
                })
            }, 1000);
        }
        catch (err) {
            dispatch(setLoadingState(false))
            console.error(err)
        }
    }

    const handleAddUser = () => {
        const tempData = {
            name: nameValue,
            email: emailValue
        }
        user.addNewUser(tempData).then((res: any) => {
            handleGetAllUsers()
        })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        if (id === 'name') {
            setNameValue(value);
        } else {
            setEmailValue(value);
        }
    };

    return (
        <>

            <Button variant="contained"
                onClick={() => handleGetAllUsers()}
            >     Get All DAta
            </Button>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="name" label="Name" variant="outlined" onChange={handleChange} />
                <TextField id="email" label="Email" variant="outlined" onChange={handleChange} />
            </Box>

            <Button variant="contained"
                onClick={() => handleAddUser()}
            >
                Add Data
            </Button>
        </>
    );
};

export default PageUpdater;