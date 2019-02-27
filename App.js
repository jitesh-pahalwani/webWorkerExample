randomWorker = new Worker('randomWorker.js');

var countOddNumbers = () => {
  var numInputValue = parseInt(document.getElementById('numInput').value);
  randomWorker.postMessage(numInputValue);
}

var returnRandomNumber = () => {
    document.getElementById('randomNum').innerText = Math.random();
}

randomWorker.onmessage = e => {
  console.log('message received from worker thread');
  document.getElementById('resultNum').innerText = e.data;
}
