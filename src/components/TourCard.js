import React from 'react'
import Paper from '@mui/material/Paper';
import { Box, Button, Grid, Rating, Typography, createTheme } from '@mui/material';
import { AccessTime, Tour } from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const TourCard = ({ tour }) => {
    const Navigate = useNavigate();

    const theme = createTheme({
        components: {
            MuiTypography: {
                variants: [
                    {
                        props: {
                            variant: 'body2',
                        },
                        style: {
                            fontSize: 11
                        }
                    },
                    // {
                    //     props: {
                    //         variant: 'body3',
                    //     },
                    //     style: {
                    //         fontSize: 9
                    //     }
                    // }
                ]
            }
        }
    })
    const tourDetails = () => {
        Navigate('/tour')
    }
    return (
        <>
            <Grid item xs={3}>
                <ThemeProvider theme={theme}>
                    <Paper elevation={3} square >
                        <img src={tour.image} alt='' className='img' />
                        <Box paddingX={1}>
                            <Typography variant='subtitle1' component="h2">Go to a tour!</Typography>
                            {/* flex display horizontal */}
                            <Box sx={{ display: "flex", alignItems: "center", flexDirection: 'row' }}>
                                <AccessTime sx={{ width: 12.5 }} />
                                <Typography variant='body2' component="p" marginLeft={0.5} >5 hours</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", flexDirection: 'row', marginTop: 3 }}>
                                <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                <Typography variant='body2' component="p" marginLeft={0.5} >4.5</Typography>
                                <Typography variant='body2' component="p" marginLeft={1.5} >(497 Reviews)</Typography>
                            </Box>
                            <Box>
                                <Typography variant='h6' component="h3" marginTop={0} >From $600</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: "center" }}>
                                <Button sx={{ marginTop: 2, marginBottom: 3 }} variant="contained" onClick={tourDetails}>Tour Details</Button>
                            </Box>
                        </Box>
                    </Paper>
                </ThemeProvider>
            </Grid>
        </>
    )
}

export default TourCard