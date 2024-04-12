document.addEventListener('DOMContentLoaded', (e) => {
    'use strict';
    


    
          // Константы меню
    const hamburger = document.querySelector('.hamburger_box'),
          menu = document.querySelector('.menu'),
          menuBg = document.querySelector('.menu_bg'),
          menuModal = document.querySelector('.menu_modal'),
          logo = document.querySelector('.logo'),
          menuLangRu = document.querySelector('.menu_modal_lang_ru'),
          menuLangEng = document.querySelector('.menu_modal_lang_eng'),
          moreRus = document.querySelector('#modal_rus'),
          moreEng = document.querySelector('#modal_eng'),
          menuCloses = document.querySelectorAll('#closeMenu'),
          // Константы блока районов
          districts = document.querySelectorAll('.distr'),
          modal = document.querySelector('.district_border_modal'),
          modalText = document.querySelector('.district_border_modal_descr'),
          modalBg = document.querySelector('.district_bg'),
          left = window.getComputedStyle(menuModal),
          modalCloses = document.querySelectorAll('#closeModal'),
          // Общие константы
          body = document.querySelector('body'),
          clientWidth = document.documentElement.clientWidth,
          rusText = document.querySelectorAll('.rus'),
          engText = document.querySelectorAll('.eng'),
        // Константы регистрации
          registr = document.querySelector('.registration'),
          openReg = document.getElementsByName("openReg"),
          regBg = document.querySelector('.registration_bg'),
          regBtn = document.querySelectorAll('.registration_window_entry_regist'),
          entryWrapper = document.querySelector('.registration_window_entry'),
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
          appealText = document.querySelector('.appeal_text');





    // Языки   


  
  
    let langMode = 'rus'
    
    if (localStorage.getItem('language', langMode) == 'eng') {
        langMode = localStorage.getItem('language', langMode)
    } else {
        localStorage.setItem('language', langMode)
    }

  



    
    if (langMode === 'rus') {
        moreRus.style.display = 'block'
        moreEng.style.display = 'none'
        engText.forEach(elem => {
            elem.classList.add('hide')
        }) 
    } else {
        moreRus.style.display = 'none'
        moreEng.style.display = 'block'
        rusText.forEach(elem => {
            elem.classList.add('hide')
        })
    }





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
                if (document.scrollHeight == document.offsetHeight && e.target.className !== 'guide_border_img') {
                    setTimeout(() => {
                        body.style.overflow = 'hidden'
                        console.log(e.target)
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

    regBtn.forEach(element => {        
        element.addEventListener('click', (e) => {
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
        const stand = +left.left.replace(/[a-z]+/gi, '')
        logo.style.opacity = 0  
        body.style.overflow = "hidden"
        menuModal.style.left = `${0}px`
        menuBg.style.opacity = 0.568


        
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

        

    // Районы

    modalBg.style.opacity = 0

    districts.forEach(distr => {
        if (clientWidth <= 767) {
            distr.style.scale = 0.6
        } 
        distr.addEventListener('click', (e) => {
            modalBg.classList.remove('hide')
            modalBg.classList.add('show')

            let nowDist
            nowDist = e.target
            nowDist.style.zIndex = "999"
            distr.style.transition = '1.5s all'
            clientWidth <= 767? distr.style.scale = 0.9 : distr.style.scale = 1.4



            if (langMode === 'rus') {
                modalText.textContent = `${e.target.dataset.parent}`
            } else{
                modalText.textContent = `${e.target.dataset.engparent}`
            }
            
            console.log(e.target)



            if (clientWidth > 767) {
                modal.style.left = `${e.target.x - e.target.naturalWidth - 200}px`
                modal.style.top = `${e.target.y - e.target.naturalHeight - 30}px`
            } 
            
            window.scrollTo({
                top: e.target.offsetTop - 100,
                left: 0,
                behavior: 'smooth'
            });

            body.style.overflow = "hidden"
            modalBg.style.transition = '1s all'
            modalBg.style.opacity = 0.568
            modalBg.style.height = `${body.scrollHeight}px`


            if (`${e.target.dataset.parent}` === 'Центр (Кировский Район)' || `${e.target.dataset.engParent}` === 'Center (Kirovsky District)'){
                let button = document.createElement("a");
                button.classList.add("district_border_modal_confirm")
                button.href = "kirov.html"
                if (langMode === 'rus') {
                    button.textContent = 'Перейти'
                } else {
                    button.textContent = 'Go'
                }
                modal.append(button)
            } else {
                let button = document.createElement("div");
                button.classList.add("district_border_modal_denide")
                if (langMode === 'rus') {
                    button.textContent = 'Временно Недоступно, в данный момент работает информация лишь по центру или же кировскому району (закрашен зеленым)'
                } else {
                    button.textContent = 'Temporarily Unavailable, at the moment information is available only for the center or the Kirov region (colored green)'
                }
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
