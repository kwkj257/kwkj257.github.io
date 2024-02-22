// carousel_hotel_descr

document.addEventListener('DOMContentLoaded', (e) => {
    'use strict';
    
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
    // Общие константы
          body = document.querySelector('body'),
          vw = window.innerWidth / 100,
          vh = window.innerHeight / 100,
    // Константы интерактива отелей
          hotel = document.querySelectorAll('.carousel_hotel_descr'),
          yaHotel = document.querySelectorAll('.carousel_hotel_descr'),
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
          formForPhone = document.getElementById('formForPhone');


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
      
              menuCloses.forEach(close => {
                  close.addEventListener('click', (ev) => {
                      menuModal.style.left = `${-37}vw`
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



    

    


})

