onmessage = function(e) {
  console.log('Worker: Message received from main script');
  var ctr = 0;
  for(i=0;i<e.data;i++){
    if(i % 2 === 0){
      ctr++;
    }
  }
  postMessage(ctr);
}
