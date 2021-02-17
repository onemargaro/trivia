import axios from 'axios';
axios.defaults.baseURL = process.env.BASE_URL;
axios.get('/api_category.php').then((categories) => console.log(categories));
