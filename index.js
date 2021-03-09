window.onload = () => {
    document.querySelector('.card').classList.add(randomsuit());
    document.querySelector('.card').innerHTML= (RandomNumber());    
};


let RandomNumber = () => {    
    let carnum = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",];
    let selecnumber = Math.floor(Math.random()*carnum.length);    
    return carnum[selecnumber];
};

let randomsuit = ()=> {
    var suit = ["diamond","spade","heart","club"];
    let selectsuit = Math.floor(Math.random()*suit.length);    
    return suit[selectsuit];
};
