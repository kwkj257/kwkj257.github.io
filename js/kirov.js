// carousel_hotel_descr

document.addEventListener('DOMContentLoaded', (e) => {
    'use strict';
    
    const hamburger = document.querySelector('.hamburger_box'),
          menu = document.querySelector('.menu'),
          menuBg = document.querySelector('.menu_bg'),
          menuModal = document.querySelector('.menu_modal'),
          logo = document.querySelector('.logo'),
          moreRus = document.querySelector('#modal_rus'),
          moreEng = document.querySelector('#modal_eng'),
          menuLangRu = document.querySelector('.menu_modal_lang_ru'),
          menuLangEng = document.querySelector('.menu_modal_lang_eng'),
          menuCloses = document.querySelectorAll('#closeMenu'),
    // Общие константы
          body = document.querySelector('body'),
          clientWidth = document.documentElement.clientWidth,
          clientHeight = document.documentElement.clientHeight,
          rusText = document.querySelectorAll('.rus'),
          engText = document.querySelectorAll('.eng'),
    // Константы регистрации
          registr = document.querySelector('.registration'),
          openReg = document.getElementsByName("openReg"),
          regBg = document.querySelector('.registration_bg'),
          entryWrapper = document.querySelector('.registration_window_entry'),
          regBtn = document.querySelectorAll('.registration_window_entry_regist'),
          questionWrapper = document.querySelector('.registration_window_question'),
          regWithEmail = document.querySelector('.registration_window_question_withEmail'),
          regWithPhone = document.querySelector('.registration_window_question_withPhone'),
          withEmailWrapper = document.querySelector('.registration_window_email_wrapper'),
          withPhoneWrapper = document.querySelector('.registration_window_phone_wrapper'),
          formForEmail = document.getElementById('formForEmail'),
          formForPhone = document.getElementById('formForPhone'),
          formElement = document.getElementById('form'),
    // Константы под мобильные устройства 
          appeal = document.querySelector('.appeal'),
          appealText = document.querySelector('.appeal_text'),
          underfooter = document.querySelector('.underfooter');





     // Языки 


  
  
    let langMode = 'rus'
  
    localStorage.setItem('language', langMode)

    langMode = localStorage.getItem('language', langMode)


    
    if (langMode == 'rus') {
        engText.forEach(elem => {
            elem.classList.add('hide')
        }) 
    } else {
        rusText.forEach(elem => {
            elem.classList.add('hide')
        })
    }





    // Пространство под футером, если высота экрана >= 898



    if (clientHeight >= 898) {
        underfooter.classList.remove('hide')
        underfooter.classList.add('show')
    }




    // Меню
      menuBg.style.opacity = 0
  
      hamburger.addEventListener('click', (e) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        menu.classList.remove('hide')
        menu.classList.add('show')
        switch (langMode) {
            case 'rus':
                moreEng.style.display = 'none'
                break;
            case 'eng':
                moreRus.style.display = 'none'
                break;
        
            default:
                break;
        }

        logo.style.opacity = 0  
        body.style.overflow = "hidden"
        menuModal.style.left = `${0}px`
        menuBg.style.opacity = 0.568
  
        menuCloses.forEach(close => {
            close.addEventListener('click', (ev) => {
                if (document.documentElement.clientWidth >= 767) {
                    menuModal.style.left = `${-37}vw`
                } else {
                    menuModal.style.left = `${-80}vw`
                }
                logo.style.opacity = 1
                menuBg.style.opacity = 0
                setTimeout(() => {            
                    if (ev.target.className == 'menu_modal_logo') {
                        window.location.href = 'index.html';
                    }    
                    body.style.overflow = "visible"
                    menu.classList.remove('show')
                    menu.classList.add('hide')
                }, 1300);
            })
        });
  
  
  
  
  
  
        menuLangRu.addEventListener('click', () => {
            langMode = 'rus'
            localStorage.setItem('language', langMode)
            moreRus.style.display = 'block'
            moreEng.style.display = 'none'
            engText.forEach(elem => {
                elem.classList.add('hide')
                
            }) 

            rusText.forEach(elem => {
                elem.classList.remove('hide')
                elem.style.opacity = 0
            })
            
            rusText.forEach(elem => {
                elem.style.transition = '2s all'
            })
            setTimeout(() => {
                rusText.forEach(elem => {
                    elem.style.opacity = 1 
                })
            }, 100);
        })

        menuLangEng.addEventListener('click', () => {
            langMode = 'eng'
            localStorage.setItem('language', langMode)
            moreEng.style.display = 'block'
            moreRus.style.display = 'none'

            rusText.forEach(elem => {
                elem.classList.add('hide')
            })

            engText.forEach(elem => {
                elem.classList.remove('hide')
                elem.style.opacity = 0
            })
            
            engText.forEach(elem => {
                elem.style.transition = '2s all'
            })
            setTimeout(() => {
                engText.forEach(elem => {
                    elem.style.opacity = 1 
                })
            }, 100);
        })
    })
      
  
    // Регистрация


    formElement.addEventListener('submit', (e) => {
        if (langMode === 'rus') {
            const formData = new FormData(formElement);
            const login = formData.get('entryLoginInputRus');
            localStorage.setItem('name', login)
        } else {
            const formData = new FormData(formElement);
            const login = formData.get('entryLoginInputEng');
            localStorage.setItem('name', login)
        }
    })

    regBg.style.opacity = 0

    openReg.forEach(el => {
        el.style.cursor = "pointer"
        el.addEventListener('click', (e) => {
            if (clientWidth >= 768) {
                if (document.scrollHeight == document.offsetHeight) {
                    setTimeout(() => {
                        body.style.overflow = 'hidden'
                    }, 1310);
                } else {
                    body.style.overflow = 'hidden'
                }
                body.style.overflow = 'hidden'
                registr.style.top = `${window.scrollY}px`
                registr.classList.remove('hide')
                setTimeout(() => {
                    regBg.style.opacity = 1
                }, 1);
                regBg.addEventListener('click', (ev) => {
                    registr.style.opacity = 0
                    regBg.style.opacity = 0
                    setTimeout(() => {
                        registr.classList.add('hide')
                        body.style.overflow = 'visible'
                        setTimeout(() => {
                            registr.style.opacity = 1
                        }, 100);
                    }, 1000);
                })
            } else {
                if (document.scrollHeight === document.offsetHeight) {
                    setTimeout(() => {
                        body.style.overflow = 'hidden'
                    }, 1310);
                } else {
                    body.style.overflow = 'hidden'
                }
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

    regBtn.forEach(el => {
        el.addEventListener('click', (e) => {
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
    });




    

    


})

