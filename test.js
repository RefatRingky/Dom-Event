// const allButton = document.getElementsByClassName('button-test');
// console.log(allButton);

// for(const button of allButton){
//     button.addEventListener('click',function (e) {
//         // console.log(e);
//         if (e.target.id == "prime") {
//             document.getElementById('title').style.color ='red';
//         }
//         else{
//             document.getElementById('title').style.color ='green';
//         }
//     })
// }


// add addEvent listener
// let count =0;
// document.getElementById('add').addEventListener('click',function (e) {
//     count = count+1;
//     document.getElementById('count').innerText = count;
// })
// // minus addEvent listener

// document.getElementById('minus').addEventListener('click',function (e) {
//     count = count-1;
//     document.getElementById('count').innerText = count;
// })

// using function
let count =0;
document.getElementById('add').addEventListener('click',function (e) {
    count++;
    // document.getElementById('count').innerText = count;
    controls('count');
})
// minus addEvent listener

document.getElementById('minus').addEventListener('click',function (e) {
    count--;
    // document.getElementById('count').innerText = count;
    controls('count');
})

function controls(id) {
    document.getElementById(id).innerText = count;
}