import { apiData } from './../http/index';

class IpData {

    async getIPData() {
        // The URL of the API
        const url = 'https://api.ipdata.co?api-key=5b51ba2ea9d22f4047019e0a4f977188142d710bdaf563c28aa2b685';
    
        try {
            // Make the GET request
            const response = await fetch(url);
    
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
    
            // Parse the JSON from the response
            const data = await response.json();
            
            // Log the data
            console.log(data);

            return data;

        } catch (error) {
            // Log any errors
            console.log(error);
        }
    };
}

export default IpData;
