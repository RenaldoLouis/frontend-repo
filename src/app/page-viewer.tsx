"use client";

import { useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { user } from "@/apis";
import { setLoadingState } from "@/redux/loadingSlice";
import { addUsers } from "@/redux/usersSlice";
import { useAppDispatch } from "@/redux/store";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PageViewer = () => {
    const dispatch = useAppDispatch();
    const loadingState = useAppSelector((state) => state.loading.loadingState);
    const usersState = useAppSelector((state) => state.users);

    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');

    const handleClose = () => setOpen(false);

    const handleGetAllUsers = async () => {
        dispatch(setLoadingState(true));
        try {
            // Simulate loading process
            await new Promise(resolve => setTimeout(resolve, 1000));

            const res = await user.getAllUsers();
            dispatch(addUsers(res.data));
            dispatch(setLoadingState(false));
        } catch (err) {
            dispatch(setLoadingState(false));
            console.error(err);
        }
    };

    const handleSaveEdit = async () => {
        handleClose();
        const tempData = {
            name: nameValue,
            email: emailValue
        };

        try {
            const res = await user.editUser(tempData, selectedUser.id);
            if (res.status === 200) {
                await handleGetAllUsers();
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        if (id === 'name') {
            setNameValue(value);
        } else {
            setEmailValue(value);
        }
    };

    const handleEditUser = (data: any) => {
        console.log("data", data)
        setOpen(true)
        setSelectedUser(data);
        setNameValue(data.name)
        setEmailValue(data.email)
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginBottom: 16 }}>
                        Text in a modal
                    </Typography>
                    <TextField value={nameValue} id="name" label="Name" variant="outlined" onChange={handleChange} style={{ marginBottom: 16 }} />
                    <TextField value={emailValue} id="email" label="Email" variant="outlined" onChange={handleChange} />

                    <Button variant="contained"
                        onClick={() => handleSaveEdit()}
                    >
                        Save Changes
                    </Button>
                </Box>
            </Modal>
            {loadingState ? (
                <Box sx={{ width: 300 }}>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </Box>
            ) : (
                usersState.length <= 0 ? (
                    <Typography variant="body1" >
                        No Data!
                    </Typography>
                ) : (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>name</TableCell>
                                    <TableCell align="left">email</TableCell>
                                    <TableCell align="left">action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {usersState.map((row) => (
                                    <TableRow
                                        key={row.id}
                                    >
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.email}</TableCell>
                                        <TableCell align="left">
                                            <IconButton color="primary" aria-label="edit Data" onClick={() => handleEditUser(row)}>
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            )}

        </div>
    );
};

export default PageViewer;