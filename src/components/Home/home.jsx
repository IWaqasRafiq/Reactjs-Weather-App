import { useState, useRef } from "react";
import React from "react";
import axios from "axios";
import { Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "./home.css";
import WeatherCard from "../Weather card/weather";
import { Card } from "@chakra-ui/react";

const Home = () => {
  const [weatherdata, setWeatherdata] = useState([]);
  const cityNameRef = useRef(null);

  const submithandler = async (e) => {
    e.preventDefault();
    let API_KEY = "e0f99c494c2ce394a18cc2fd3f100543";
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityNameRef.current.value}&appid=${API_KEY}&units=metric`
      );
      console.log(response.data);
      setWeatherdata(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };
  return (
    <div>
      <div className="searchInput">
        <form onSubmit={submithandler}>
          <Input
            variant="flushed"
            htmlSize={30}
            width="auto"
            ref={cityNameRef}
            required
            placeholder="Enter Place Name"
          />
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </form>
      </div>
      <br />
      <Card maxW='sm'>
        <WeatherCard weatherData={weatherdata[0]} />
      </Card>
    </div>
  );
};

export default Home;
