(() => {

    const refs = {
        control: document.querySelector('[js-control]'),
        buttons:[btn1 = document.querySelector('[data-btnIndex="0"]'),
                btn2 = document.querySelector('[data-btnIndex="1"]'),
                btn3 = document.querySelector('[data-btnIndex="2"]'),],
        clients: [client1 = document.querySelector('[js-client-1]',),
                 client2 = document.querySelector('[js-client-2]'),
                 client3 = document.querySelector('[js-client-3]'),]
    }


    let actualClientIndex = 0;
    const lastClientIndex = refs.clients.length - 1;


    //Client functions

    const removeClient = () => {
        refs.clients[actualClientIndex].classList.remove('is-visible');
        refs.buttons[actualClientIndex].firstElementChild.classList.add('icon-hidden');
        refs.buttons[actualClientIndex].lastElementChild.classList.remove('icon-hidden');    
    }
    
    const addClient = () => {
        if (actualClientIndex > lastClientIndex) { actualClientIndex = 0; }
        refs.clients[actualClientIndex].classList.add('is-visible');
        refs.buttons[actualClientIndex].firstElementChild.classList.remove('icon-hidden');
        refs.buttons[actualClientIndex].lastElementChild.classList.add('icon-hidden');    
    }

    const nextClient = () => {
        removeClient();
        actualClientIndex++;
        addClient();
    };

    //--------------------

    //Interval and autoplay slider

    let mainInterval = setInterval(nextClient, 5000);

    const resetMainInterval = () => {
        clearInterval(mainInterval);
        mainInterval = setInterval(nextClient, 5000);
    }

    //--------------------

    //Slider manual control

    refs.control.addEventListener("click", (e) => {
       
        if (e.target.nodeName === "BUTTON") {
            removeClient();
            actualClientIndex = Number(e.target.dataset.btnindex);
            addClient();
            resetMainInterval();
         }   
  
    });
    
     //--------------------

})();

// Coded by Łukasik Grzegorz
// https://github.com/lukasikgrzegorz