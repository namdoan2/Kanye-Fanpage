import React, {useState} from "react";
import Axios from "axios";
import './Quote.css';

const Quote = () => {

    const [quote, setQuote] = useState('');

    const apiURL = 'https://api.kanye.rest/';
  
    const getQuote = () => {
      Axios.get(apiURL).then((response) => {
        console.log(response)
        setQuote('"' + response.data.quote + '"');
      })
    }


    return(
        <>
        <button onClick={getQuote}>Quote from Kanye West</button>
        <p className="quote">{quote}</p>
        </>
    )
}

export default Quote;