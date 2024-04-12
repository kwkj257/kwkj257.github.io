document.addEventListener('DOMContentLoaded', (e) => {
    let data = localStorage.getItem('language')


    let i = 0,
        scale = 0.01,
        time = 0;
    let text = document.querySelectorAll(".info_text");
    const back = document.querySelectorAll(".back")
          rusText = document.querySelectorAll('.rus'),
          engText = document.querySelectorAll('.eng');

    let langMode = 'rus'
    
    langMode = data
    
    if (langMode == 'rus') {
        engText.forEach(elem => {
            elem.remove()
        }) 
    } else {
        rusText.forEach(elem => {
            elem.remove()
        })
    }

    text = document.querySelectorAll(".info_text"),
      

    text.forEach((tex) => {
        tex.style.scale = 0
    })

    text.forEach((tex) => {
        tex.style.transition = '1s all'
    })

    console.log(text)

    back.forEach(el => {
        el.style.scale = 0
    });





    function scaling() {
        let waiting = setTimeout(() => {
            let timer = setInterval(() => {
                scale += 0.01;
                try {
                    text[i].style.scale = scale;
                } catch {}
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
                    back.forEach(el => {
                        el.style.scale = 1
                    });
                }, 1500);
            }
        }, time);

        time = 1000
    }

    

    if (i !== 2) {
        scaling()
    }


    console.log(window.innerHeight)
    setTimeout(() => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
        console.log(1)
    }, 4000);

    
    back.forEach(el => {        
        el.addEventListener('click', () => {
            text.forEach((tex) => {
                tex.style.scale = 0.001
                el.style.scale = 0
            })
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        })
    });

    

})