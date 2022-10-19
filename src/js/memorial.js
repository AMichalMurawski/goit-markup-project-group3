(() => {
  const memoryBtn = document.querySelector('[js-memorial-btn]')
  const memoryDiv = document.querySelector('[js-memorial-modal]');
  
  const removeClass = () => {memoryDiv.classList.remove('memory__show')};
  
  memoryBtn.addEventListener('click', ()=>{
    memoryDiv.classList.add('memory__show');
    setTimeout(removeClass,10000);
  });  
})();
