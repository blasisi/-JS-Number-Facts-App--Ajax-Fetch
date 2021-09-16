//fetch 

// let fact =document.querySelector("#fact");
//  let factText =document.querySelector("#factText");

//  let numberInput =document.querySelector("#numberInput");
//  numberInput.addEventListener("input", getFactFetch);

// // function getFactFetch() {
// // let number = numberInput.value;
// // // console.log(number);
// // let num = new XMLHttpRequest();
// // num.open(`GET`, 'http://numbersapi.com/' +number);  //take three parament(type of request, url/file, async-true or false)

// // num.onload = function(){
// // if(this.status == 200){//check for the HTTP statuses , 200 is ok, 400 is forbidden, 404 is not found
// //     console.log(this.reponseText);
// //     }
// // }
// // num.send();//send request
// // }

// function getFactFetch(){
//     let number =numberInput.value;

//     fetch('http://numbersapi.com/' +number)
//     .then(response => reponse.text())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));
// }