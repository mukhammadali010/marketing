import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Mycontext from "../context";

import { Container, Content } from "./style";

const Card = () => {
  const { data, setData } = useContext(Mycontext);

  // Function to get the icon URL based on the icon code
  const getIconUrl = (iconCode) => {
    const baseUrl = 'https://openweathermap.org/img/wn/';
    return `${baseUrl}${iconCode}@2x.png`; // Adjust the URL format according to OpenWeather's icon URLs
  };

  // Check if data and weather information exist before accessing properties
  if (!data || !data.weather || data.weather.length === 0) {
    return <div>No weather information available</div>;
  }

  return (
    <>
      <Container>
        <div className="card__title">
          <h5>
            {data.sys?.country} , {data.name}{" "}
          </h5>
          <div className=".card__title">
            <img src={getIconUrl(data.weather[0].icon)} alt="Weather Icon" />
            <p className="textCard">
            {data.weather[0].description} {data.main.temp} C°
            </p>
          </div>
        </div>
        <p className="textCard">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem magnam, delectus velit ratione quaerat repudiandae error optio quibusdam aperiam, perferendis non cupiditate sit, nam et incidunt asperiores quia nobis accusantium mollitia. Porro rerum eum cumque accusamus, quo saepe magni quia doloribus adipisci praesentium voluptatibus laboriosam a! Doloremque id eos quas dolores eligendi, voluptates dolorem a quaerat asperiores recusandae odit quasi corrupti placeat reprehenderit expedita ipsa? Eum, eveniet saepe 
        </p>
        <div className="cardFooter">
          <p>Wind degree: {data.wind.deg}</p>
          <span>Wind speed : {data.wind.speed}</span>
        </div>
      </Container>
    </>
  );
};

export default Card;
