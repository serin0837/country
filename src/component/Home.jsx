import React from "react";
import SimpleMap from "./SimpleMap";

const Home = () => {
  return (
    <main>
      <header style = {{"margin": "20px"}}>
        Hi!<span role = "img" aria-label = "hello">👋</span>
        In this application, you can get information about all of the different countries in the world.
        Also, you can add an imaginary country, update information about an imaginary country or delete your imaginary country if you want.
        Below are the countries that I have been to, but in the future I want you to create your map to add the countries that you have been to.
      </header>
      <SimpleMap />
    </main>
  );
};
export default Home;
