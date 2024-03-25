document.addEventListener('DOMContentLoaded', (event) => {
    let data = localStorage.getItem('name')

    const username = document.querySelector('.navigation_profile_name')

    try {
        username.textContent = data
    } catch (error) {}

    console.log(data)
})