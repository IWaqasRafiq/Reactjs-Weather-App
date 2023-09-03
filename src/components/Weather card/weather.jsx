import React from "react";
import "./weather.css";
import {
	Box,
	Flex,
	Heading,  
	Text,
  Tooltip,
  Image
} from '@chakra-ui/react';
import cardBackground from "../Assets/mountain.jpeg"
import { getByTimestamp, getTimestampWeekDay } from '../timestamp';
const getWeatherIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;



const WeatherCard = ({ weatherData }) => {
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
          {getTimestampWeekDay(weatherData?.dt)}
        </Heading>
        <Text>{getByTimestamp(weatherData?.dt)}</Text>

        {weatherData?.weather[0] && (
          <Tooltip hasArrow label={weatherData.weather[0].main} placement={"top"}>
            <Image
              width={"80px"}
              filter={"drop-shadow(0 0 4px white)"}
              src={getWeatherIcon(weatherData?.weather[0].icon)}
              alt={weatherData?.weather[0].description}
            />
          </Tooltip>
        )}

        <Heading fontSize={"lg"}>
          {weatherData?.name} {""}
          <Text
            as={"sup"}
            fontSize={"xs"}
            fontWeight={"bold"}
            backgroundColor={"burlywood"}
            color={"white"}
            px={2}
            borderRadius={10}
          >
            {weatherData?.sys?.country}
          </Text>
        </Heading>

        {weatherData?.weather[0] && (
          <Text fontSize={"md"}>
            {weatherData?.weather[0].description.toUpperCase()}
          </Text>
        )}

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
            <Text fontWeight={"bold"}>{Math.round(weatherData?.main.temp)} ºC</Text>
          </Box>
          <Box>
            <Text fontSize={"sm"}>Feels Like</Text>
            <Text fontWeight={"bold"}>
              {Math.round(weatherData?.main.feels_like)} ºC
            </Text>
          </Box>
          <Box>
            <Text fontSize={"sm"}>Humidity</Text>
            <Text fontWeight={"bold"}>{Math.round(weatherData?.main.humidity)}%</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )}  
  export default WeatherCard;

