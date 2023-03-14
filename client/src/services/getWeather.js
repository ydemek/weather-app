import { API_URL } from './config';

export const getWeather = async (value) => {
    const response = await fetch(`${API_URL}/weather?` + new URLSearchParams({
    cityName: value,
}))
    return response.json();
};
