import PNotify from '@pnotify/core/dist/PNotify';

//import '@pnotify/core/dist/es/PNotifyButtons.js';
import '@pnotify/core/dist/BrightTheme.css';


const KEY = '15302072-a81be31270c5e4995077a81d4';

export default function serviseApi(searchValue, pageNumber, callBack) {
  const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=${pageNumber}&per_page=12&key=${KEY}`;
  fetch(baseUrl)
    .then(response => {
      return response.json();
    }) 
    .then(data => {
      callBack(data);
      
      PNotify.success({
        title: 'NEW REUEST',
        text: 'Create new HTTP request',
      });
    })
    .catch(error => {
      console.error(error);
    });
}