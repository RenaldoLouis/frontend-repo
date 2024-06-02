"use client";

import { useAppSelector } from "@/redux/store";
import React from "react";
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const PageViewer = () => {
    const loadingState = useAppSelector((state) => state.loading.loadingState);
    const usersState = useAppSelector((state) => state.users);

    return (
        <div>
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
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {usersState.map((row) => (
                                    <TableRow
                                        key={row.id}
                                    >
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.email}</TableCell>
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