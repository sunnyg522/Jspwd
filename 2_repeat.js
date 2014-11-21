(function schedule(){
  setTimeout(function(){
    console.log('hello world!');
    schedule();
  },1000);
}
)();
