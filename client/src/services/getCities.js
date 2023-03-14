import { API_URL } from './config';

export const getCities = async (value) => {
    const response = await fetch(`${API_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify({
            cityName: value,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};
