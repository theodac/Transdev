import axios from "axios";

export default async function commercialAPI() {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json"
            },
            method: 'get',
            url: 'http://localhost:8080/api/commercial',
            params: {
                startDate: '2021-06-01'
            }
        });

        return response.data.data[0];
    } catch (error) {
        console.error(error);
    }
    return null;
}