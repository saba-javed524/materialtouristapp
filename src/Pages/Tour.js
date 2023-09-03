import React from 'react'
import { Container, Typography, Box, Paper, BottomNavigation } from '@mui/material'
import ImageCollage from '../components/ImageCollage'
import CustomizedAccordions from '../components/Accordion'
import BasicModal from '../components/Modal'


const Tour = () => {
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant='h3' component='h1' marginTop={3}>Explore the world in Vegas</Typography>
            <Box marginTop={3} sx={{ display: 'flex' }}>
                <img src='https://c4.wallpaperflare.com/wallpaper/679/723/812/las-vegas-strip-at-night-seen-from-the-balcony-of-the-cosmopolitan-hotel-desktop-wallpaper-for-pc-tablet-and-mobile-download-2560%C3%971600-wallpaper-preview.jpg' alt='' height={400} />
                <ImageCollage />
            </Box>
            <Box>
                <Typography variant='h6' component='h4' marginTop={3}>About this ticket</Typography>
                <Typography variant='paragraph' component='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis blanditiis consequuntur reprehenderit perspiciatis quos et ab ipsam nulla minima, quam excepturi autem incidunt distinctio laborum, magnam delectus saepe necessitatibus nobis!</Typography>
            </Box>
            <Box marginBottom={10}>
                <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>Frequently Asked Questions</Typography>
                <CustomizedAccordions />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>
    )
}

export default Tour