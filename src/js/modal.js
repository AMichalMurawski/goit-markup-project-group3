(() => {
  const modals = [
  { openModalBtn: document.querySelector('[data-modal-open-1]'),
    closeModalBtn: document.querySelector('[data-modal-close-1]'),
    modal: document.querySelector('[data-modal-1]'),
    openModalBtnMenu: document.querySelector('[data-modal-open-3]'),
    
  },
  { openModalBtn: document.querySelector('[data-modal-open-2]'),
    closeModalBtn: document.querySelector('[data-modal-close-2]'),
    modal: document.querySelector('[data-modal-2]'),
  }
  ];
  modals[0].openModalBtn.addEventListener('click', ()=>modals[0].modal.classList.toggle('is-hidden') );
  modals[0].closeModalBtn.addEventListener('click', ()=>modals[0].modal.classList.toggle('is-hidden'));
  modals[1].openModalBtn.addEventListener('click', ()=>modals[1].modal.classList.toggle('is-hidden') );
  modals[1].closeModalBtn.addEventListener('click', () => modals[1].modal.classList.toggle('is-hidden'));
  modals[0].openModalBtnMenu.addEventListener('click', ()=>modals[0].modal.classList.toggle('is-hidden') );
   
  //For second div with google maps
  localDivs = [
    div1 = document.querySelector("[data-local-div-1]"),
    div2 = document.querySelector("[data-local-div-2]"),
    div3 = document.querySelector("[data-local-div-3]"),
  ]
  const locationBtns = document.querySelector("[data-locationBtns]");
  let actualDiv = 0;
  
  localDivs[actualDiv].classList.add('modal-visable');
  locationBtns.addEventListener("click", (e) => {
      
      if (e.target.nodeName === "BUTTON") {
        localDivs[actualDiv].classList.remove('modal-visable');
        actualDiv=Number(e.target.dataset.locbtnindex);
        localDivs[actualDiv].classList.add('modal-visable');
      }   
  });
  
})();


// Coded by Łukasik Grzegorz
// https://github.com/lukasikgrzegorz