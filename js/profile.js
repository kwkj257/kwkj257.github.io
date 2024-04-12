document.addEventListener('DOMContentLoaded', (event) => {
    let data = localStorage.getItem('name'),
        lang = localStorage.getItem('language')

    const rusText = document.querySelectorAll('.rus'),
          engText = document.querySelectorAll('.eng'),
          more = document.querySelectorAll('.link_modal_menu')


    let langMode = 'rus'      
    langMode = lang

        
    if (langMode === 'rus') {
        more[1].style.display = 'none'
        engText.forEach(elem => {
            elem.classList.add('hide')
        }) 
    } else {
        more[0].style.display = 'none'
        rusText.forEach(elem => {
            elem.classList.add('hide')
        })
    }


    const username = document.querySelector('.navigation_profile_name')

    try {
        username.textContent = data
    } catch (error) {}
})