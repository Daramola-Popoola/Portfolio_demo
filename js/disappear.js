const Next = document.querySelector('.next-view');
const Prev = document.querySelector('.prev-view');
const ul = document.querySelectorAll('.list-mother .list-item');
let num = 0;
Next.addEventListener('click', updateListUp)
Prev.addEventListener('click', updateListDown);

function updateListUp() {
    num += 1;
    for(i = 1; i<= ul.length; i++){
        if(i == num){
            
            ul[i].classList.remove('hidden')
            ul[i].classList.add('active')
             console.log(num);
        }else if(num < i || num > i){
            ul[i].classList.add('hidden')
            ul[i].classList.remove('active')
        }
       
    }
    
    return num;
}

function updateListDown() {
   num -= 1;
    for(i = 0; i<=ul.length; i++){
        if(i == num){
            ul[i].classList.remove('hidden')
            ul[i].classList.add('active')
            
             console.log(ul[i]);
             console.log(ul)
    }else if(num < i || num > i){
        ul[i].classList.add('hidden')
        ul[i].classList.remove('active')
    }
}
}
