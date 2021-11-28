window.onload = updateTodoList();


document.getElementById('NeedToDoItem').addEventListener("keyup", function(event)
{
  if (event.keyCode === 13) {
    //this cancels the default action in case
    event.preventDefault();
    savedItem();
  }
});

function savedItem(){
  storedInList = JSON.parse(localStorage.getItem("ToDoItems"));
  storedInList.push(document.getElementById('NeedToDoItem').value);
  localStorage.setItem('ToDoItems', JSON.stringify(storedInList));
  updateTodoList();
  document.getElementById('NeedToDoItem').value = "";
}

function NothingToDo() {
  nonetodo = "<div class='mb-2 col-md-12'><p class='mb-2 mt-2 text-center text-light border border-light p-2'><i class='far fa-thumbs-up mr-4'></i>Thumbs up - theres nothing to do!</p></div>";
  document.getElementById('containerToDo').innerHTML = nonetodo;
}

function updatingToDoList() {
  //array functions
  //if array doesn't exist then it creates one
  if (localStorage.getItem("ToDoItems") === null) {
    array1 = [];
    localStorage.setItem("ToDoItems", JSON.stringify(array1));
    NothingToDo();
    //if array is empty but exists
  } else if (localStorage.getItem("ToDoItems") === "[]") {
    NothingToDo();
  } else {
    //gets the local storage and turn into the array
    storedInList = JSON.parse(localStorage.getItem("ToDoItems"));
    //goes through the array and creates an alert box
    containerToDo = document.createElement('div');
    storedInList.forEach(function(item, index) {
      div = document.createElement('div');
      div.setAttribute('class', 'mb-2 col-md-12');
      div.innerHTML = "<div class='alert alert-primary mb-1' id=item-" + index + ")'><p class='mb-0'><i class='far fa-circle mr-4'></i>" + item + "</p></div>";
      containerToDo.appendChild(div);
    });
    document.getElementById('containerToDo').innerHTML = containerToDo.innerHTML;
  }
}

//saving the items in an array
var testedObject = { 'one': 1, 'two': 2, 'three': 3 };
localStorage.setItem('testedObject', JSON.stringify(testedObject));

var retrivingObject = localStorage.getItem('testedObject');
retrivingObject = JSON.parse(retrivingObject)

//removing items from array list
storedInList = storedInList.filter(function(item) {
        return item !== storedInList[index];
      })

//deleting the completed items
function deleteTheCompleted() {
        localStorage.removeItem('completedItems');
        updateCompletedToDoList();
      }

//turning into pwa
      var CACHE_NAME = 'simple-PWA-localStorage';
      var urlsToCache = [
        './',
        './index.html',
        './manifest.json',
        './bootstrap.css'
      ];

      self.addEventListener('install', function(event) {
        // Perform install steps
        event.waitUntil(
          caches.open(CACHE_NAME)
            .then(function(cache) {
              console.log('Opened cache');
              return cache.addAll(urlsToCache);
            })
        );
      });

      self.addEventListener('fetch', function(event) {
        event.respondWith(
          caches.match(event.request)
            .then(function(response) {
              // Cache hit - return response
              if (response) {
                return response;
              }

              return fetch(event.request).then(
                function(response) {
                  // Check if we received a valid response
                  if(!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                  }
                  var responseToCache = response.clone();

                  caches.open(CACHE_NAME)
                    .then(function(cache) {
                      cache.put(event.request, responseToCache);
                    });
                  return response;
                }
              );
            })
          );
      });
