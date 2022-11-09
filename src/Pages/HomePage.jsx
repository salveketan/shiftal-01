
import { Box } from '@chakra-ui/react'
import React from 'react'
import MainPage from '../components/MainPage'
import Navbar from '../components/Navbar'
import "../Pages/Home-page.css"

const HomePage = () => {
    return (
        <Box className='Home-page' h={["950px", null, "750px",]}>
            <Navbar />
            <MainPage />
        </Box>
    )
}

export default HomePage
