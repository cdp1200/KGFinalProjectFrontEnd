import React, { useState } from 'react';
import "./css/Widgets.css"

function Widgets() {

    const checkLocation = {
        value: ""
    }

    const initWeatherState = {
        temperature: "",
        threeday: ""
    }

    const [location, setLocation] = useState(checkLocation);
    const [response, setResponse] = useState(false);
    const [temp, setTemp] = useState(initWeatherState)
    
    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setLocation({...location, [name]: value})
    }

    const newLocation = () => {
        fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location.value}&days=3`, {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": "604db612c5msheb8c30d25816e8bp1c9e2bjsn9fba8abebd1a",
		        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
	        }
        })
        .then(response => 
            response.json()
        )
        .then((weatherDataObj) => {
            setResponse(true)
            setTemp({temperature: weatherDataObj.current.temp_f, threeday: weatherDataObj.forecast.forecastday})
            return weatherDataObj
            // threeDayForecast(weatherDataObj)
        })
        .catch(err => {
            console.error(err);
        });
        // setLocation(checkLocation);
    }


    const initBoredState = {
        activity: "",
        type: "",
        participants: 0,
        price: 0,
        link: "",
        accessibility: 0.00,
    }

    const [bored, setBored] = useState(initBoredState);
    const [boredResponse, setBoredResponse] = useState(false);

    const boredAPI = async () => {
        await fetch(`https://www.boredapi.com/api/activity`, {
            method: "GET"
        })
        .then(response => 
            response.json()
        )
        .then((boredObj) => {
            setBored({
                activity: boredObj.activity,
                type: boredObj.type,
                participants: boredObj.participants,
                price: boredObj.price,
                link: boredObj.link,
                accessibility: boredObj.accessibility,
            })
            setBoredResponse(true)
        })
        .catch(err => {
            console.error(err);
        });
    }

    return(
        <div className="widgets">
        <div>
            <button className="bored__button" type="button" onClick={boredAPI}>
                Bored... Click Me
            </button>
        </div>

        {boredResponse ? (
            <div id="activity" >
                <div className="activity">Maybe try to...{bored.activity}</div>
            </div>
        ) : (
            <div id="activity">
                <div className="activity">Maybe try to...</div>
            </div>
        )}


<div id="content">
        <div id="request">
            <input placeholder="Check your cities forecast" id="value"  type="text" value={location.value} onChange={handleInputChange} name="value"/> 
            <button id="submit"  type="button" value="Get Weather" onClick={newLocation} >Check Weather</button>
        </div> 
        {response ? (
            <div id="forecast" >
            <div id="current">
                <div className="label">{temp.temperature} F</div>
            </div>
        </div>
        ) : (
            <div id="forecast" >
            <div id="current">
                <div className="label">Current conditions</div>
            </div>
        </div>
    
        )}
        </div>



        </div>

        
    )
}

export default Widgets