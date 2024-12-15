import axios from 'axios';

interface ResourceData {
    // define the structure of data here
    name: string;
    description: string;
}

interface ResourceResponse {
    // define the structure of response data here
    id: string;
    name: string;
    description: string;
}

export const createNewResource = async (data: ResourceData): Promise<ResourceResponse> => {
    const response = await axios.post('/api/resources', data);
    return response.data;
};