window.addEventListener('DOMContentLoaded', () =>{

    const icon = document.querySelector('.icon'),
        modal = document.querySelector('.icon_modal');

    const openFunc = () => {
        modal.classList.toggle('show');
    }

    icon.addEventListener('click', openFunc)
    modal.addEventListener('click', () =>{
        modal.classList.remove('show')
    })

})