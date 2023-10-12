

function getLocationError(error) {
    console.log("location retrieval error", error)
}

export const getCoordinates = (cb) => {
    let latitude;
    let longitude;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                cb({ latitude, longitude })
            },
            getLocationError
        );
    } else {
        console.log("Geolocation not supported");
    }
};

export async function getWeather(location) {
    const data = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${location.latitude}&lng=${location.longitude}`
    );
    let weather = await data.json();
    console.log('weather', weather);
    return weather
}
