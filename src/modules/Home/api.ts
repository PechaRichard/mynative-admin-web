import axios from "axios";


const client = axios.create({
    baseURL: "http://localhost:25000"
});


export const listScreens = async () => {
    const response: any = await client.get('screens');

    return response?.data;
}