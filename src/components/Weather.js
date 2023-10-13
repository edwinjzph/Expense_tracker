import React from 'react'

function Weather({ weather, location }) {
    console.log(weather, location)
    return (
        <div style={{ backgroundColor: "white", position: "fixed", padding: "10px", top: "30px", right: "20px", zIndex: 20000, borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
            <div >
                <h5 style={{ color: "black", margin: "0" }}>Latitude  :  {location.latitude}</h5>
                <h5 style={{ color: "black", margin: "0" }}>longitude :  {location.longitude}</h5>
                <h5 style={{ color: "black", margin: "0" }}>Sunrise   :  {weather?.results.sunrise}</h5>
                <h5 style={{ color: "black", margin: "0" }}>sunset    :  {weather?.results.sunset}</h5>
            </div>
        </div>
    )
}

export default Weather