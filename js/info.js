document.addEventListener('DOMContentLoaded', (e) => {

    let i = 0,
        scale = 0.01,
        time = 0;
    const text = document.querySelectorAll(".info_text"),
          back = document.querySelector(".back");

    text.forEach((tex) => {
        tex.style.scale = 0
        tex.style.transition = '1s all'
    })
    
    back.style.scale = 0

    function scaling() {
        let waiting = setTimeout(() => {
            let timer = setInterval(() => {
                scale += 0.01;
                text[i].style.scale = scale;
                if (scale >= 1) {
                    i++;
                    scale = 0.01;
                    clearInterval(timer);
                }
            }, 5);

            if (i !== 2) {
                scaling()
            } else {
                setTimeout(() => {
                    back.style.scale = 1
                }, 1500);
            }
        }, time);

        time = 1000
    }

    if (i !== 2) {
        scaling()
    }

    back.addEventListener('click', () => {
        text.forEach((tex) => {
            tex.style.scale = 0.001
            back.style.scale = 0
        })
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    })

})