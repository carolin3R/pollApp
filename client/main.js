console.log('Client-side code running TESTING TO MAKE SURE THIS IS BEING LOADED'); // lil test



// calls fetchData upon click

function fetchData(result_value) {
fetch('http://localhost:3000/addData', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
  "name": result_value
  })
}).then(res => {
  return res.json()
}).then(data => console.log(data))
.catch(error => console.log('ERROR'))
}

function displayRadioValue() {
    var ele = document.getElementsByName('drone');
    console.log("Went into Display!!")
    // displays the result to the user
    // I want to upon a button click update the database and possibly show the user the result
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            if(ele[i].id == "yes"){
              fetchData(1);
            }
            else{
              fetchData(0);
            } 
                // also want to send a request to the back-end to update database!!
    }
}
// gets element from html 
// document.getElementById("myButton").onclick = function () { displayRadioValue; };
// const button = document.getElementById('myButton');
// button.addEventListener("click", displayRadioValue);

// function 
// function fetchData() {
//   fetch('http://localhost:3000/')
//     .then(function (response) {
//       console.log('heya')
//       // 200 is the good status
//       if (response.status !== 200) {
//         console.log(
//           'Looks like there was a problem. Status Code: ' + response.status
//         );
//         return;
//       }
//       // otherwise
//       response.json().then(function (data) {
//         console.log(data);
//         //document.getElementById('w3review').value = data;
//       });
//     })
//     .catch(function (err) {
//       console.log('Fetch Error :-S', err);
//     });
// }

