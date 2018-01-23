!function(){
    let button = document.getElementById('button')
    let circle = document.getElementById('circle')
    console.log('left',button.offsetLeft)
    console.log('top',button.offsetTop)
    button.addEventListener('click',(event) => {
        let left = event.clientX - button.offsetLeft
        let top = event.clientY - button.offsetTop
        circle.setAttribute("style", 'left:' + left + 'px;top:' + top + 'px;');
        event.currentTarget.classList.add('active')
    })
    button.addEventListener('transitionend',(event) => {
        event.currentTarget.classList.remove('active')
        circle.setAttribute("style", '');
    })
}.call()