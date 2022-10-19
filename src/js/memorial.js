(() => {
  const memoryBody = document.querySelector("body");
  const memoryBtn = document.querySelector('[js-memory-btn]')
  const memoryDiv = document.createElement("div");
  const memoryData = `<img class="memory__ribbon" src="./images/memory-ribbon.png" alt="ribbon remembrance" /><div class="memory__robbie-coltrane"><p class="memory__quote">"So you could be watching it in 50 year's time, easily... I'll not be here, sadly... but Hagrid will, yes." - Robbie Coltrane</p><img src="./images/memory-robbie-coltrane.jpg" alt="Robbie Coltrane, lived from 1950 to 2022" /></div>`;
  memoryDiv.classList.add('memory');
  memoryDiv.classList.add('memory__show');
  memoryDiv.innerHTML = memoryData;
  const removeDiv = () => {memoryDiv.remove();};
  const showMemory = () => {
    
  }
  
  memoryBtn.addEventListener('click', ()=>{
    memoryBody.prepend(memoryDiv);
    setTimeout(removeDiv,5000);
  });  
})();
