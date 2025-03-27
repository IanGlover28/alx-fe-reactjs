import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_APP_GITHUB_API_BASE_URL
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: `token ${API_KEY}`,
    },
  });
  
  export const fetchGitHubUser = async (username) => {
    try {
      const response = await axiosInstance.get(`/users/${username}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch user');
    }
  };


  export default fetchGitHubUser;