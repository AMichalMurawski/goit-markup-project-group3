(() => { 

    const button1 = document.querySelector(".products__button--1");
    const button2 = document.querySelector(".products__button--2");
    const button3 = document.querySelector(".products__button--3");
    const madeBy = document.querySelector("[made-by]");
    
    let madeByCopy = madeBy.innerHTML;
    let count = 0;

    button1.addEventListener("click", () => {
        if (count % 2 == 0) {
            madeBy.innerHTML = "<p>Made</br>by</br>Ola<p>";
            madeBy.classList.add("made-by");
            count++;
      } else {
            madeBy.innerHTML = madeByCopy; 
            madeBy.classList.remove("made-by");
            count++;
        }
    });
    

})();