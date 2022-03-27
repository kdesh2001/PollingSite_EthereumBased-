
  function createPoll() {
    var opt1v = document.getElementById('op1').value;
    console.log(opt1v);
    document.getElementById('load').style.display = 'block';
    document.getElementById('afterload').style.display = 'none';
  }
  function showStuff() {
      document.getElementById('content').style.display = 'block';
      document.getElementById('or').style.display = 'none';
      document.getElementById('exist').style.display = 'none';
      var n=document.getElementById('no.ofOptSelect').value;
      // if(n==1){
      //   document.getElementById('opt1').style.display = 'block';
      //   document.getElementById('opt2').style.display = 'none';
      //   document.getElementById('opt3').style.display = 'none';
      //   document.getElementById('opt4').style.display = 'none';
      // }
      if(n==2){
        document.getElementById('opt1').style.display = 'block';
        document.getElementById('opt2').style.display = 'block';
        document.getElementById('opt3').style.display = 'none';
        document.getElementById('opt4').style.display = 'none';
      }
      else if(n==3){
        document.getElementById('opt1').style.display = 'block';
        document.getElementById('opt2').style.display = 'block';
        document.getElementById('opt3').style.display = 'block';
        document.getElementById('opt4').style.display = 'none';
      }
      else{
        document.getElementById('opt1').style.display = 'block';
        document.getElementById('opt2').style.display = 'block';
        document.getElementById('opt3').style.display = 'block';
        document.getElementById('opt4').style.display = 'block';
      }
  }
  function exists() {
    document.getElementById('create').style.display = 'none';
    document.getElementById('or').style.display = 'none';
    document.getElementById('exist').style.display = 'none';
    document.getElementById('select').style.display = 'none';
  }
  