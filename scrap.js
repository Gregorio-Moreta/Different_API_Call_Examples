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
      console.log('fetch     ', json);
      }
    catch {
      console.log("YOU FUCKED UP");
    }
  }

  fetchData()



// Async Axios
// import { get } from 'axios';
// Don't use import, just get the CDN
// https://cdnjs.com/libraries/axios
// Make a request for a user with a given ID
// returns object with a data object with the usable data
// data.data
const url = `https://pokeapi.co/api/v2/pokemon/charizard/`

// Promises with .then method
axios.get(url)
  .then(function (response) {
    // handle success
    console.log('axios     ',response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// promises with async await
// returns object with a data object with the usable data
// data.data
const ApiCall = async () => {
  const data = await axios(url)
  console.log('async await', data)
}

ApiCall()

// AJAX Request
// let xhttp = new XMLHttpRequest();
  
//   xhttp.open("GET", url, true);
//   xhttp.send();

// let send = xhttp.send()


console.log('========>')

// AJAX Request
$.ajax(url)
.then(data => console.log('ajax      ',data))
.catch(error => console.log(error))






