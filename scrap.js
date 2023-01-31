// const fetch = require('node-fetch')

// import fetch from 'node-fetch'

// const URL = 'https://pokeapi.co/api/v2/pokemon/charizard/'


// const res = fetch(URL)
// // .then(res => console.log(res))
// .then(res => res.json())
// .then((data) => console.log('data',data))
// .catch(error => {
//     console.log('---->', error)
// })
// .finally(() => {
//     console.log('goodbye world')
// })


console.log('hello world')

// Async fetch function
async function fetchData() {
    const url = `https://pokeapi.co/api/v2/pokemon/charizard/`
    //   // Write code here.
    try {
      const res = await fetch(url)
      const json = await res.json()
      console.log(json);
      }
    catch {
      console.log("YOU FUCKED UP");
    }
  }

  fetchData()




  // Async Axios
// import { get } from 'axios';

// Make a request for a user with a given ID
const url = `https://pokeapi.co/api/v2/pokemon/charizard/`
axios.get(url)

  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });



// AJAX Request
let xhttp = new XMLHttpRequest();
  
  xhttp.open("GET", url, true);
  xhttp.send();

// let send = xhttp.send()
  console.log('========>')

$.ajax(url)
.then(data => console.log(data))
.catch(error => console.log(error))



