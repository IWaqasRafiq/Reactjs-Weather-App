import { useState, useRef } from "react";
import React from "react";
import axios from "axios";
import { Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import "./home.css"


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
      setWeatherData([response.data, ...weatherData]);
    } catch (error) {
      console.log(error.data);
    }
  };
  return (
    <div className="searchInput">
      <form onSubmit={submithandler}>
      <Input variant="flushed" htmlSize={30} width='auto' placeholder="Enter Place Name" />
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<SearchIcon />}
      />
      </form>
    </div>
  );
};

export default Home;
