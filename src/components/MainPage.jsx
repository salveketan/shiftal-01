import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import artwork from "../modules/artwork.png"
import SubContent from "../modules/SubContent.png"
import featuredIn from "../modules/featuredIn.png"

const MainPage = () => {
    return (
        <div>
            
            <SimpleGrid columns={[1, null, 2]} spacing='40px' >
                <Box w={"90%"} mt={"60px"} ml={["25px", null, "80px"]}>
                    <Box fontFamily={'Poppins'} font-style={"normal"} fontWeight={"800"} fontSize={["19px", null, "38px"]} lineHeight={"63px"} color={"#D2C2FF"}>
                        Transform your idea into reality by hiring the best <span style={{ color: "#A6D4FF", textDecorationLine: 'underline' }}>IT TECH HEADS from Zyrop!</span>
                    </Box>
                    <Box mt={"30px"}>
                        <img src={SubContent} alt="SubContent" />
                    </Box>
                    <Box mt={"50px"}>
                        <Button w={"60%"} borderRadius={"30px"} bg={"#F3A6FF"}>
                            <Text fontSize={["12px", null, "15px"]}>Scale your dream team!</Text>
                        </Button>
                    </Box>
                </Box>
                <Box p={"10px"} w={"60%"} mt={"50px"} ml={["90px", null, "250px"]}>
                    <img src={artwork} alt="artwork" />
                </Box>
            </SimpleGrid>
            <Box w={"90%"} m={"auto"} mt={"33px"}  >
                <img src={featuredIn} alt="featuredIn" />
            </Box>
        </div>
    )
}

export default MainPage
