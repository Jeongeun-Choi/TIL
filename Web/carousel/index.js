const firstSlider = document.querySelector('.slider:first-child');
const lastSlider = document.querySelector('.slider:last-child');
const btnBox = document.querySelector('.btnBox');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

// const right = () => {
//     const showing = document.querySelector('.showing');

//     const nextSlider = showing.nextElementSibling;
//     showing.classList.remove('showing');
//     if(nextSlider){
//         nextSlider.classList.add('showing');
//     } else{
//         firstSlider.classList.add('showing');
//     }
// }

// const left = () => {
//     const showing = document.querySelector('.showing');

//     const prevSlider = showing.previousElementSibling;
//     showing.classList.remove('showing');
//     if(prevSlider){
//         prevSlider.classList.add('showing');
//     } else{
//         lastSlider.classList.add('showing');
//     }
// }

const carousel = (e) =>{
    if(e.target.className === 'btnBox') return;

    const showing = document.querySelector('.showing');

    if(e.target.className === 'left'){
        const prevSlider = showing.previousElementSibling;
        showing.classList.remove('showing');
        if(prevSlider){
            prevSlider.classList.add('showing');
        } else{
            lastSlider.classList.add('showing');
        }
    } else{
        const nextSlider = showing.nextElementSibling;
        showing.classList.remove('showing');
        if(nextSlider){
            nextSlider.classList.add('showing');
        } else{
            firstSlider.classList.add('showing');
        }
    }
    // if(showing){
    //     const nextSlider = showing.nextElementSibling;
    //     showing.classList.remove('showing');
    //     if(nextSlider){
    //         nextSlider.classList.add('showing');
    //     } else{
    //         firstSlider.classList.add('showing');
    //     }
    // } else{
    //     firstSlider.classList.add('showing');
    // }

}

btnBox.addEventListener('click', carousel);
// leftBtn.addEventListener('click', left);
// rightBtn.addEventListener('click', right);