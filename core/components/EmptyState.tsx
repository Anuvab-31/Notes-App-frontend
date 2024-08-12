import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const EmptyState = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: "center",
            flexDirection: "column",
            alignItems: 'center',
            height: "80vh",
            width: '100vw'
        }}>
            <Image
                height={500}
                width={500}
                src={'/emptyState.jpg'}
                alt='empty'
            />

            <Typography variant='h6' sx={{ mt: 2 }}>No record found</Typography>
        </Box>
    )
}

export default EmptyState