import { initSelectOptions } from './actions/generate';
import { difficultySelect, typesSelect, categorySelect, formElement } from './selectors';
import { generateTrivia } from './services/api';

initSelectOptions();

formElement.onsubmit = (e) => {
  e.preventDefault();
  generateTrivia(categorySelect.value, difficultySelect.value, typesSelect.value).then(({ data }) => {
    console.log(data);
  });
};
