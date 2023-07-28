import axios from 'axios';

const API_URL = 'http://localhost:8081';

export const saveInvoice = async (payload) => {
    try {
        const response = await axios.post(`${API_URL}/invoice`, payload);
        if (response && response.data) {
            return response.data;
        } else {
            // Handle the case when response or response.data is undefined
            throw new Error('Invalid response from the server');
        }
    } catch (error) {
        console.log('Error: ', error.message);
        // You might want to handle the error differently here, based on your application's needs.
        // For example, you can return an error object with specific properties.
        return { error: 'An error occurred while saving the invoice.' };
    }
}

 export const getAllInvoices = async () =>{
    try {
        return  await axios.get(`${API_URL}/invoice`)
    } catch (error) {
        console.log('Error: ', error.message);
        return { error: 'An error occurred while GetInvoice the invoice.' };
    }
}


export const deleteInvoice = async (id) => {
    try {
        return await axios.delete(`${API_URL}/invoice/${id}`);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}