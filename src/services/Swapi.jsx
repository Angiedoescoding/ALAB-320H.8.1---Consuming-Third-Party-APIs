import axios from 'axios'
// import { useState, useEffect } from 'react';

const url = 'https://www.swapi.tech/api/starships/';

export default async function GetAllStarships() {

    try {
      let resp = await axios.get(url);
      return resp.data.results;
    } catch (err) {
      console.error("Error fetching starships.", err);
      return [];
    }
  };

  //useEffect to get card data and set to state
  // useEffect(() => {
  //   getCard();
  // }, []);

  // const loaded = () => {
  //   return (
  //     <div>
  //       <h2>
  //         {card.name}
  //       </h2>
  //     </div>
  //   );
  // }
