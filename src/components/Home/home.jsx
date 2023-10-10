import { useState, useRef, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Input, IconButton, Stack, Text, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "./home.css";
import WeatherCard from "../Weather card/weather";
import { Card } from "@chakra-ui/react";
// import Nodata from "../Assets/search.gif"

const Home = () => {
  const [weatherData, setWeatherData] = useState([]);
  const cityNameRef = useRef(null);

  const [currentLocationWeather, setCurrentLocationWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (location) => {
        console.log("location: ", location);

        try {
          let API_KEY = "e0f99c494c2ce394a18cc2fd3f100543";
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}&units=metric`,
            {
              signal: controller.signal,
            }
          );
          console.log(response.data);

          setCurrentLocationWeather(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.data);
          setIsLoading(false);
        }
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    return () => {
      // cleanup function
      controller.abort();
    };
    console.log("i fire once");
  }, []);

  const submithandler = async (e) => {
    e.preventDefault();
    console.log("cityName: ", cityNameRef.current.value);

    let API_KEY = "e0f99c494c2ce394a18cc2fd3f100543";
    try {
      setIsLoading(true);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityNameRef.current.value}&appid=${API_KEY}&units=metric`
      );
      console.log(response.data);
      setWeatherData([response.data, ...weatherData]);
      setIsLoading(false);
      e.target.reset();
    } catch (error) {
      console.log(error?.data);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className="searchInput">
        <form onSubmit={submithandler}>
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="5xl"
            fontWeight="extrabold"
            justifyContent={"center"}
            p={"2"}
          >
            Weather App
          </Text>
          <Input
            variant="flushed"
            htmlSize={35}
            width="auto"
            ref={cityNameRef}
            required
            placeholder="Enter Place Name"
          />
          <IconButton
            colorScheme="blue"
            type="submit"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </form>
      </div>
      <br />
      <div>
        <Stack direction={"row"} p={"2"} justify={"center"} align={"center"}>
          <Card
            w={{
              base: "95%",
              md: "60%",
              xl: "35%",
            }}
            h={"auto"}
            textAlign={["center"]}
          >
            {isLoading ? (
              <Button
                isLoading
                h={"20"}
                colorScheme="teal"
                variant="solid"
              ></Button>
            ) : null}

            {weatherData.length ||
            currentLocationWeather ||
            isLoading ? null : (
              <Button
                isLoading
                h={"20"}
                colorScheme="teal"
                variant="solid"
              ></Button>
            )}

            {weatherData.map((eachWeatherData, index) => {
              return <WeatherCard key={index} weatherData={eachWeatherData} />;
            })}

            {currentLocationWeather ? (
              <WeatherCard weatherData={currentLocationWeather} />
            ) : null}
          </Card>
        </Stack>
      </div>
    </div>
  );
};

export default Home;
