window.addEventListener('DOMContentLoaded', () =>{

    const icon = document.querySelector('.icon'),
          modal = document.querySelector('.modal');

    // const openFunc = () => {
    //     modal.classList.toggle('show');
    // }
    const closeFunc = () => {
        modal.classList.remove('show');
    };

    document.addEventListener('click', e => {
        if (e.target === modal){
            closeFunc();
        }
    })

    icon.addEventListener('click', openFunc)
    modal.addEventListener('click', () =>{
        modal.classList.remove('show');
    })

})