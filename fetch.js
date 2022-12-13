/**
 * Cecilia Tong
 * Class 8 Exercise & Homework
 * Dec 6, 2022
 * FETCH hw
 */

// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const API_KEY = '6nnczrcTpZxxqdtNAQX2GJMIINmDmWbF'
const formInput = 'cars';
const url = `${BASE_URL}?q=${formInput}&api-key=${API_KEY}`;

fetch(url)
  .then(function (data) {
    return data.json();
  })
  .then(function (responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }

    // display the snippet on the page
    const snippet = article.snippet;
    document.getElementById('article-snippet').innerText = snippet;

    // set the href on the Full Article link to link to the New York Times article
    const articleLink = article.web_url;
    document.getElementById('article-link').setAttribute('href', articleLink);

    // show one additional item on the page
    let newP = document.createElement("p"); //create new <p>
    let newPText = document.createTextNode('article author'); //text node for new <p>
    newP.appendChild(newPText); //add text node to new <p>
    newP.id = 'article-author'; //set id for new <p> 
    let divEl = document.getElementsByClassName('container')[0];//referance <div>
    divEl.appendChild(newP); // add new <p> to <div>
    const articleAuthor = article.byline.original; //get author's name
    document.getElementById('article-author').innerText = articleAuthor; //display author on page
  });