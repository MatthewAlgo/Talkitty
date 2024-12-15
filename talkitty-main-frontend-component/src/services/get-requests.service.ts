import axios from 'axios';

interface Resource {
  id: string;
  name: string;
  // add other properties as needed
}

export const getAllResources = async (): Promise<Resource[]> => {
  const response = await axios.get('/api/resources');
  return response.data;
};

export const getResourceById = async (id: string): Promise<Resource> => {
  const response = await axios.get(`/api/resources/${id}`);
  return response.data;
};