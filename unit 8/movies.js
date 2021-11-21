function createNode(element){
  return document.createElement(element);
}

function append(parent, el){
  return parent.appendChild(el);
}

const api_key = 'apikey=c9367e3b';
const base_url = 'http://www.omdbapi.com/?i=tt1201607';
const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=c9367e3b';
const movieContainer = document.getElementById('movieSearch');

function searchMovies(textToSearch){
  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    let movieList = data.results;
    return movieList.map(function(author){
      let img = createNode('img'),
      card-title = createNode('card-title')
      card-text = createNode('card-text');
      img.src = movieList.picture.medium;
      append(img);
      append(card-title);
      append(card-text);

    }
  })
})
}
.catch(function(error){
  console.log(error);
})

    showMovies(data.results);
  })
}
