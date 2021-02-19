import axios from 'axios';
axios.defaults.baseURL = process.env.BASE_URL;

export const getCategories = () => axios.get('/api_category.php');
