(() => {
  const starter = document.getElementById('starter'),
    content = document.getElementById('content');
  const contentArray = [
    "Everything we make with love and passion, that's why our icecreams are so delicious.",
    'We use only pure and natural ingredients. Milk from real cows. No digital. No virtual. No shit.',
    'However we also develop webpages, as you can see from this example.',
    'Meet our dream team: Oleńka, Dżołi, Kamila, Murek, Lesiu, Grzesiu, Michamas, Dawid, Rafał.',
    "If you want to have your own exceptional webpage, call us. We'll do the best.",
  ];
  let i = 0;
  starter.onclick = function () {
    if (i < contentArray.length) {
      content.innerHTML = contentArray[i];
      i++;
    } else {
      content.innerHTML =
        "Learn the secret of our success. Find out why everyone loves Icecream. It's a kind of magic!";
      i = 0;
    }
  };
})();
