function makeSkyblue(){
    document.body.style.backgroundColor = 'skyblue';
}

// btn Red
const redBtn = document.getElementById('redBtn');
redBtn.onclick = makeRed;

function makeRed(){
    document.body.style.backgroundColor = 'red';
}


// 3
//with Normal function 
const greenBtn = document.getElementById('greenBtn');
greenBtn.onclick = function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

//with anonymous function
const tomatoBtn = document.getElementById('tomatoBtn'); 
tomatoBtn.onclick = function(){
    document.body.style.backgroundColor = 'tomato';
}

// add EventListner
const goldenRod = document.getElementById('goldenRodBtn');
goldenRod.addEventListener('click', makeGoldenRod);

function makeGoldenRod(){
    document.body.style.backgroundColor = 'goldenrod';
};

// 
const hotPinkBtn = document.getElementById('hotPinkBtn');
hotPinkBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'hotpink';
});
// direct || Mostly useable
document.getElementById('khakiBtn').addEventListener('click', function(){
    document.body.style.backgroundColor = 'khaki';
});
