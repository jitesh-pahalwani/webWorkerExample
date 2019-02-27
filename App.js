randomWorker = new Worker('randomWorker.js');

var countOddNumbers = () => {
  var numInputValue = parseInt(document.getElementById('numInput').value);
  randomWorker.postMessage(numInputValue);
}

randomWorker.onmessage((e) => {
  document.getElementById('resultNum').innerText = e;
})

var returnRandomNumber = () => {
    document.getElementById('randomNum').innerText = Math.random();
}
