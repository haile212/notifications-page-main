const marked = document.querySelector('.marked');
const unreadednum = document.querySelector('.unreader');
const dot = document.querySelectorAll('.dot')
marked.addEventListener('click', ()=>{
    unreadednum.textContent = 0;
    console.log('hello');
    dot.forEach(element => {
        element.style.display='none';
    });
})
