import axios from 'axios'
import { useState, useEffect } from 'react';

function GetAllStarships() {
  const [card, setCard] = useState(null);
  const url = 'https://www.swapi.tech/api/starships/';

  async function getCard() {
    try {
      let result = await axios.get(url);
      setCard(result.data);
    } catch (err) {
      console.error("Error fetching starships", err);
    }
  }

  //useEffect to get card data and set to state
  useEffect(() => {
    getCard();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h2>
          {card.name}
        </h2>
      </div>
    );
  };

}

export default GetAllStarships;