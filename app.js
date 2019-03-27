const drums = document.querySelectorAll('.drum');
//console.log(davullar);
/*
const liste = [1,2,3,4,5];

liste.forEach(num =>{//array ise foreach ile ulasılır
    console.log(num);
});

*/

drums .forEach(drum=> {
    //console.log(drum);
    drum.addEventListener('click',()=>{
    let className=drum.classList[2];
    getBigger(className);
    makeSound(className);
    });
});

function getBigger(key){

    let activeBox = document.querySelector(`.${key}`);
    activeBox.classList.add('bigger');
    setTimeout(() => {
        activeBox.classList.remove('bigger');
    }, 100);

}

function makeSound(key){
    switch(key){
        case 'w':
            const sound1 = new Audio('sounds/sound1.mp3');
            sound1.play();
            break;
        case 'a':
            const sound2 = new Audio('sounds/sound2.mp3');
            sound2.play();
            break;
        case 's':
            const sound3 = new Audio('sounds/sound3.mp3');
            sound3.play();
            break;
        case 'd':
            const sound4 = new Audio('sounds/sound4.mp3');
            sound4.play();
            break;
        case 'j':
            const sound5 = new Audio('sounds/sound5.mp3');
            sound5.play();
            break;
        case 'k':
            const sound6 = new Audio('sounds/sound6.mp3');
            sound6.play();
            break;
        case 'l':
            const sound7 = new Audio('sounds/sound7.mp3');
            sound7.play();
            break;
        default:
            console.log('Wrong key!')
    }
}

document.addEventListener('keypress',() => {
    //console.log(event.key);
    getBigger(event.key);
    makeSound(event.key);

});