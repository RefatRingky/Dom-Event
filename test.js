const allButton = document.getElementsByClassName('button-test');
console.log(allButton);

for(const button of allButton){
    button.addEventListener('click',function (e) {
        // console.log(e);
        if (e.target.id == "prime") {
            document.getElementById('title').style.color ='red';
        }
        else{
            document.getElementById('title').style.color ='green';
        }
    })
}