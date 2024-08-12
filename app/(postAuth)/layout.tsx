"use client";

import React, { useEffect, useState } from 'react';
import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import AxiosInstance, { GetUserService } from '@/apis/rest.app';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';

const PostAuthlayout = ({ children }: any) => {

    const router = useRouter();
    const [userInfo, setUserInfo] = useState<any>(null);

    useEffect(() => {
        AxiosInstance.get(GetUserService)
            .then((response: any) => setUserInfo(response?.data?.user))
            .catch((error: any) => {
                enqueueSnackbar(error.message, { variant: "error" });
                localStorage.clear();
                router.push("/login");
            })
    }, [])

    
    const handleLogout = () => {
        localStorage.clear();
        router.push("/login");
    }

    return (
        <>
            <AppBar style={{ background: "#ffffff", position: "fixed" }}>
                <Toolbar>
                    <Typography sx={{ fontSize: "24px", fontWeight: 600, color: "#1F1F1F" }}>Notes App </Typography>
                    <Box flexGrow={1} />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-end",
                            }}
                        >
                            <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#1F1F1F" }}> {userInfo?.fullName} </Typography>
                        </Box>

                        <IconButton
                            size="small"
                            aria-haspopup="true"
                        >
                            <Avatar
                                src={''}
                                sx={{ width: "32px", height: "32px", fontSize: "14px" }}
                            >
                                {userInfo?.fullName?.charAt(0).toUpperCase()}
                            </Avatar>
                        </IconButton>
                        <Button variant='contained' onClick={() => handleLogout()}>Logout</Button>
                    </Box>
                </Toolbar>
            </AppBar>


            <Box component="main" sx={{ mt: "50px", width: "100%", p: 3 }}>
                {children}
            </Box>
        </>
    )
}

export default PostAuthlayout