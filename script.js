let checked = false

const btnMenu = document.querySelector('.btn-mobile')

btnMenu.addEventListener('click', ()=>{
    const menuMobile = document.querySelector('.menu-mobile-area')
    console.log('clicou')
    if(!checked){
        btnMenu.classList.add('cross-animation')
        menuMobile.classList.add('open-menu-animation')
        menuMobile.classList.remove('close-menu-animation')
        checked = true
    } else{
        btnMenu.classList.remove('cross-animation')
        menuMobile.classList.add('close-menu-animation')
        menuMobile.classList.remove('open-menu-animation')
        checked = false
    }

})