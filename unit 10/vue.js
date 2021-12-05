//java for the movie finder using vue

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


//inserting vue
new Vue({
    el: '#app',
      data: {
        movies: []
      },
      created() {
        var vm = this
        axios.get('https://www.omdbapi.com/?s=Harry+Potter&apikey=c9367e3b')
          .then(function(response) {
            vm.movies = response.data.Search
          })
      }
    })

var url = window.location.href;
var searchString = url.split('?');
searchString = searchString[1];
