document.addEventListener('DOMContentLoaded', (e) => {
    'use strict';
    
    
    // Константы меню
    const hamburger = document.querySelector('.hamburger_box'),
          menu = document.querySelector('.menu'),
          menuBg = document.querySelector('.menu_bg'),
          menuModal = document.querySelector('.menu_modal'),
          logo = document.querySelector('.logo'),
          menuSorry = document.querySelector('.menu_modal_sorry'),
          menuLang = document.querySelector('.menu_modal_lang'),
          menuLangChange = document.querySelectorAll('#sorry'),
          menuLangty = window.getComputedStyle(menuSorry),
          left = window.getComputedStyle(menuModal),
          logoty = window.getComputedStyle(logo),
          menuCloses = document.querySelectorAll('#closeMenu'),
    // Константы блока районов
          districts = document.querySelectorAll('.distr'),
          modal = document.querySelector('.district_border_modal'),
          modalText = document.querySelector('.district_border_modal_descr'),
          modalBg = document.querySelector('.district_bg'),
          modalCloses = document.querySelectorAll('#closeModal'),
    // Общие константы
          body = document.querySelector('body'),
          vw = window.innerWidth / 100,
          vh = window.innerHeight / 100,
          clientWidth = document.documentElement.clientWidth,
    // Константы регистрации
          registr = document.querySelector('.registration'),
          openReg = document.getElementsByName("openReg"),
          regBg = document.querySelector('.registration_bg'),
          entryWrapper = document.querySelector('.registration_window_entry'),
          formElement = document.getElementById('form'),
          regBtn = document.querySelector('.registration_window_entry_regist'),
          questionWrapper = document.querySelector('.registration_window_question'),
          regWithEmail = document.querySelector('.registration_window_question_withEmail'),
          withEmailWrapper = document.querySelector('.registration_window_email_wrapper'),
          formForEmail = document.getElementById('formForEmail'),
          regWithPhone = document.querySelector('.registration_window_question_withPhone'),
          withPhoneWrapper = document.querySelector('.registration_window_phone_wrapper'),
          formForPhone = document.getElementById('formForPhone'),
    // Константы под мобильные устройства 
            appeal = document.querySelector('.appeal'),
            appealText = document.querySelector('.appeal_text');



    // Регистрация



    formElement.addEventListener('submit', (e) => {
        const formData = new FormData(formElement);
        const login = formData.get('entryLoginInput');
        localStorage.setItem('name', login)
    })

    regBg.style.opacity = 0

    openReg.forEach(el => {
        el.style.cursor = "pointer"

        el.addEventListener('click', (e) => {
            if (clientWidth >= 768) {            
                body.style.overflow = 'hidden'
                registr.style.top = `${window.scrollY}px`
                registr.classList.remove('hide')
                // registr.classList.add('show')
                setTimeout(() => {
                    regBg.style.opacity = 1
                }, 1);
                regBg.addEventListener('click', (ev) => {
                    registr.style.opacity = 0
                    regBg.style.opacity = 0
                    setTimeout(() => {
                        // registr.classList.remove('show')
                        registr.classList.add('hide')
                        body.style.overflow = 'visible'
                        setTimeout(() => {
                            registr.style.opacity = 1
                        }, 100);
                    }, 1000);
                })
            } else {
                body.style.overflow = 'hidden'
                appeal.style.top = `${window.scrollY}px`
                appeal.classList.remove('hide')
                appeal.classList.add('show')
                appealText.style.opacity = 0
                appeal.style.opacity = 0
                appeal.style.transition = '1s all'
                appealText.style.transition = '1s all'
                setTimeout(() => {
                    appeal.style.opacity = 1
                }, 1);
                setTimeout(() => {
                    appealText.style.opacity = 1
                },1000);

                const close = () => {
                    appealText.style.opacity = 0
                    setTimeout(() => {
                        appeal.style.opacity = 0
                        setTimeout(() => {                            
                            appeal.classList.remove('show')
                            appeal.classList.add('hide')
                            body.style.overflow = 'visible'
                        }, 500);
                    }, 1000);
                }

                
                const timer = setTimeout(() => close(), 5000);


                appeal.addEventListener('click', (eve) => {
                    if (eve.target.className !== 'appeal_text') {
                        close()
                        clearTimeout(timer)
                    }
                })


            }
        })
    });

    function closing(clos) {
        clos.style.opacity = 1
        setTimeout(() => {
            clos.style.opacity = 0
        }, 1);

        setTimeout(() => {
            clos.classList.remove('show')
            clos.classList.add('hide')
        }, 200);
    }

    function opening(opn) {
        setTimeout(() => {
            opn.classList.remove('hide')
            opn.classList.add('show')
            opn.style.opacity = 0
        }, 1);


        setTimeout(() => {
            opn.style.opacity = 1
        }, 300);
    }

    regBtn.addEventListener('click', (e) => {
        closing(entryWrapper)
        questionWrapper.style.opacity = 0
        questionWrapper.style.display = 'flex'
        setTimeout(() => {
            questionWrapper.style.opacity = 1
        }, 300);
        regWithEmail.addEventListener('click', (e) => {
            questionWrapper.style.display = 'none'
            closing(questionWrapper)
            opening(withEmailWrapper)
            formForEmail.addEventListener('submit', (e) => {
                e.preventDefault();
                const newData = new FormData(formForEmail);
                const email = newData.get('entryNewEmailInput');
                const login = newData.get('entryNewNameInput');
                const password = newData.get('entryNewPaswordInput');
                closing(withEmailWrapper)
                opening(entryWrapper)
            })
        })
        regWithPhone.addEventListener('click', (e) => {
            closing(questionWrapper)
            questionWrapper.style.display = 'none'
            opening(withPhoneWrapper)
            formForPhone.addEventListener('submit', (e) => {
                e.preventDefault();
                const newData = new FormData(formForPhone);
                const phone = newData.get('entryNewEmailInput');
                const login = newData.get('entryNewNameInput');
                const password = newData.get('entryNewPaswordInput');
                closing(withPhoneWrapper)
                opening(entryWrapper)
            })
        })
    })


    // Меню

    menuBg.style.opacity = 0
    menuSorry.classList.add('hide')

    hamburger.addEventListener('click', (e) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        menu.classList.remove('hide')
        menu.classList.add('show')
        const stand = +left.left.replace(/[a-z]+/gi, ''),
              logot = +logoty.opacity;
        logo.style.opacity = 0  
        body.style.overflow = "hidden"
        menuModal.style.left = `${0}px`
        menuBg.style.opacity = 0.568
        console.log(screen.orientation)

        menuCloses.forEach(close => {
            close.addEventListener('click', (ev) => {
                if (clientWidth >= 767) {
                    menuModal.style.left = `${-37}vw`
                } else {
                    menuModal.style.left = `${-80}vw`
                }
                logo.style.opacity = 1
                menuBg.style.opacity = 0
                setTimeout(() => {            
                    body.style.overflow = "visible"
                    menu.classList.remove('show')
                    menu.classList.add('hide')
                }, 1300);
            })
        });

        const menuty = +menuLangty.opacity;





        menuLangChange.forEach(el => {
            el.addEventListener('click', (e) => {
                menuSorry.classList.remove('hide')
                menuSorry.classList.add('show')
                setTimeout(() => {
                    menuSorry.style.transition = '1s all'
                    menuSorry.style.opacity = 1
                }, 100);
                menuLang.style.opacity = 0
                setTimeout(() => {
                    menuLangChange.forEach(elem => elem.remove())
                }, 1000); 
            })
        });
    })
    


    // Районы

    modalBg.style.opacity = 0

    districts.forEach(distr => {
        if (clientWidth <= 767) {
            distr.style.scale = 0.6
            // distr.style.display = 'none'
        } 
        distr.addEventListener('click', (e) => {
            modalBg.classList.remove('hide')
            modalBg.classList.add('show')

            let nowDist
            nowDist = e.target
            nowDist.style.zIndex = "999"
            distr.style.transition = '1.5s all'
            // distr.style.scale = 1.4;
            clientWidth <= 767? distr.style.scale = 0.9 : distr.style.scale = 1.4
            modalText.textContent = `${e.target.dataset.parent}`
            
            if (clientWidth > 767) {
                modal.style.left = `${e.target.x - e.target.naturalWidth - 200}px`
                modal.style.top = `${e.target.y - e.target.naturalHeight - 30}px`
            } 
            
            window.scrollTo({
                top: e.target.offsetTop - 100,
                left: 0,
                behavior: 'smooth'
            });

            // modalBg.style.top = `${e.target.offsetTop - 100}px`
            body.style.overflow = "hidden"
            modalBg.style.transition = '1s all'
            modalBg.style.opacity = 0.568
            modalBg.style.height = `${body.scrollHeight}px`


            if (`${e.target.dataset.parent}` === 'Центр (Кировский Район)') {
                let button = document.createElement("a");
                button.classList.add("district_border_modal_confirm")
                button.href = "kirov.html"
                button.textContent = 'Перейти'
                modal.append(button)
            } else {
                let button = document.createElement("div");
                button.classList.add("district_border_modal_denide")
                button.textContent = 'Временно Недоступно, в данный момент работает информация лишь по центру или же кировскому району (закрашен зеленым)'
                modal.append(button)
            }


            modalBg.style.transition = '0s all'
            
            modalCloses.forEach(close => {
                close.addEventListener('click', (e) => {
                    document.querySelectorAll('.district_border_modal_confirm').forEach(el => {
                        el.remove()
                    });
                    document.querySelectorAll('.district_border_modal_denide').forEach(el => {
                        el.remove()     
                    });
                    modal.classList.remove('show')
                    modal.classList.add('hide')
                    clientWidth <= 767? distr.style.scale = 0.6 : distr.style.scale = 1
                    nowDist.style.zIndex = "1"
                    
                    modalBg.style.opacity = 0
                    setTimeout(() => {            
                        body.style.overflow = "visible"
                        modalBg.classList.remove('show')
                        modalBg.classList.add('hide')
                    }, 1);
                })
            });
            
            modal.classList.remove('hide')
            modal.classList.add('show')
        })
    });
})
