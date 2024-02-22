document.addEventListener('DOMContentLoaded', (event) => {
    let data = localStorage.getItem('name')

    const username = document.querySelector('.navigation_profile_name')

    username.textContent = data

    console.log(data)
})