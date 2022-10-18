(() => {
  const starter = document.getElementById('starter'),
    content = document.getElementById('content');
  const contentArray = [
    "Everything we make with love and passion, that's why our icecreams are so delicious.",
    'We use only pure and natural ingredients. Milk from real cows. No digital. No virtual. No shit.',
    'However we also develop webpages, as you can see from this example.',
    'Meet our dream team: Asia, Ola, Kamila, Michał, Kamil, Michamas, Grzegorz, Dawid, Rafał.',
    "If you want to have your own exceptional webpage, call us. We'll do the best.",
  ];
  let i = 0;
  starter.onclick = function () {
    if (i < contentArray.length) {
      content.innerHTML = contentArray[i];
      i++;
    } else {
      i = 0;
    }
  };
})();
