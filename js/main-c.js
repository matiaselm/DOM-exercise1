'use strict';

const main = document.querySelector('main');

const image = document.createElement('img');
image.src= 'http://placekitten.com/320/160';

//other way to add attributes:
image.setAttribute('alt','some cat');

const figCapt = document.createElement('figcaption');
figCapt.innerHTML = 'Some caption';

const fig = document.createElement('figure');
fig.appendChild(image);
fig.appendChild(figCapt);

const h2 = document.createElement('h2');
h2.innerHTML = 'Article header 2';

const header = document.createElement('header2');
header.appendChild(h2);

const p = document.createElement('p');
p.innerHTML= 'Here is some text. Here is some text. Here is some text. Here is some text.';

const article = document.createElement('article');
article.appendChild(header);
article.appendChild(fig);
article.appendChild(p);

main.appendChild(article);