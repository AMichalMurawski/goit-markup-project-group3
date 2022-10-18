(() => { 

    const button1 = document.querySelector(".products__button--1");
    const header = document.querySelector(".products__name--2");
    const madeBy = document.querySelector("[made-by]");
    const madeBy2 = document.querySelector("[made-by2]");
    const madeBy3 = document.querySelector("[made-by3]");

    let madeByCopy = madeBy.innerHTML;
    let madeByCopy3 = madeBy3.innerHTML;
    let headerCopy = header.innerHTML;
    let toogle = false;

    button1.addEventListener("click", () => {
        if (toogle === false) {
            madeBy.innerHTML = "<p>Made</br>by</br>Ola<p>";
            madeBy.classList.add("made-by");
            madeBy2.classList.add("hidden-cat");
            header.innerHTML = "ICE COTTEE"
            madeBy3.innerHTML = "<p>< This</br>< is</br>< Bobo<p>";
            madeBy3.classList.add("made-by");
            toogle = true;
      } else {
            madeBy.innerHTML = madeByCopy; 
            madeBy.classList.remove("made-by");
            madeBy2.classList.remove("hidden-cat");
            header.innerHTML = headerCopy;
            madeBy3.innerHTML = madeByCopy3; 
            madeBy3.classList.remove("made-by");
            toogle = false;
        }
    });
    
})();

// Coded by Łukasik Grzegorz
// https://github.com/lukasikgrzegorz