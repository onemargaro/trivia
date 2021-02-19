import axios from 'axios';
import { AMOUNT } from '../config/constants';
axios.defaults.baseURL = process.env.BASE_URL;

export const getCategories = () => axios.get('/api_category.php');

export const generateTrivia = (category, difficulty, type) =>
  axios.get(`/api.php?amount=${AMOUNT}&category=${category}&difficulty=${difficulty}&type=${type}`);
