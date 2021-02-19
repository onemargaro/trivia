import { DIFFICULTIES, TYPES } from '../config/constants';
import { getCategories } from '../services/api';

const difficultySelect = document.getElementById('difficulty');
const typesSelect = document.getElementById('type');
const categorySelect = document.getElementById('category');

DIFFICULTIES.map((difficulty) => {
  const optionElement = document.createElement('option');
  optionElement.value = difficulty;
  const optionText = document.createTextNode(difficulty);
  optionElement.appendChild(optionText);
  difficultySelect.appendChild(optionElement);
});

TYPES.map((type) => {
  const optionElement = document.createElement('option');
  optionElement.value = type;
  const optionText = document.createTextNode(type);
  optionElement.appendChild(optionText);
  typesSelect.appendChild(optionElement);
});

getCategories().then(({ data }) => {
  data.trivia_categories.map((category) => {
    const optionElement = document.createElement('option');
    optionElement.value = category.id;
    const optionText = document.createTextNode(category.name);
    optionElement.appendChild(optionText);
    categorySelect.appendChild(optionElement);
  });
});
