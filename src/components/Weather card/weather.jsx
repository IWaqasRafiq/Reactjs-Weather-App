import React from "react";
import "./weather.css";
import {
	Box,
	Flex,
	Heading,  
	Text
} from '@chakra-ui/react';
import cardBackground from "../Assets/mountain.jpeg"

const WeatherCard = ({ weatherdata }) => {
    return (
    <Box
      backgroundImage={`${cardBackground}`}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      backgroundColor={"blackAlpha.600"}
      backgroundBlendMode={"overlay"}
      transition={"all 0.3s ease-in-out"}
      _hover={{
        backgroundColor: "blackAlpha.700"
      }}
      borderRadius={"10px"}
      color={"white"}
      boxShadow={"lg"}
    >
      <Box
        position={"relative"}
        as={Flex}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        paddingX={4}
        paddingY={6}
        color={"white"}
        textAlign={"center"}
      >
        
        <Heading as={"h4"} fontSize={"xs"} fontWeight={"bold"}>
          {"03"}
        </Heading>
        <Text>{"03"}</Text>

        {/* {weather.weather[0] && (
          <Tooltip hasArrow label={weather.weather[0].main} placement={"top"}>
            <Image
              width={"80px"}
              filter={"drop-shadow(0 0 4px white)"}
              src={getWeatherIcon(weather?.weather[0].icon)}
              alt={weather?.weather[0].description}
            />
          </Tooltip>
        )} */}

        <Heading fontSize={"lg"}>
          {"KARACHI"} {""}
          <Text
            as={"sup"}
            fontSize={"xs"}
            fontWeight={"bold"}
            backgroundColor={"secondary.500"}
            color={"white"}
            px={2}
            borderRadius={10}
          >
            {"PK"}
          </Text>
        </Heading>
{/* 
        {weather?.weather[0] && (
          <Text fontSize={"md"}>
            {capitalizeString(weather?.weather[0].description)}
          </Text>
        )} */}

        <Flex
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={[0, 0, 2]}
          padding={2}
          w={"100%"}
          marginTop={4}
          borderRadius={"10px"}
          backgroundColor={"whiteAlpha.500"}
          sx={{
            "& *": {
              textAlign: "center",
              flex: ["0 1 50%", "0 1 50%", "auto"]
            }
          }}
        >
          <Box>
            <Text fontSize={"sm"}>Current Temp.</Text>
            <Text fontWeight={"bold"}>{"41"} ºC</Text>
          </Box>
          <Box>
            <Text fontSize={"sm"}>Feels Like</Text>
            <Text fontWeight={"bold"}>
              {"38"} ºC
            </Text>
          </Box>
          <Box>
            <Text fontSize={"sm"}>Humidity</Text>
            <Text fontWeight={"bold"}>{"10"}%</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )}  
  export default WeatherCard;

