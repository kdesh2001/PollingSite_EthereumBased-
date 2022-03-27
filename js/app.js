var op1,op2,op3,op4,o1c,o2c,o3c,o4c;
App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

  init: async function() {
    await window.ethereum.enable();
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    App.account=accounts[0];
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
      //console.log("yes its working");
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
      //console.log("yes its working2");
    }
    //document.getElementById('load').style.display = 'none';
    //document.getElementById('afterload').style.display = 'block';
    return App.initContract();
  },

  initContract: function() {
    console.log("Yes, got till here");
    $.getJSON("/build/contracts/Poll.json", function(poll) {
      console.log("Yes, got till here1");
      // Instantiate a new truffle contract from the artifact
      App.contracts.Poll = TruffleContract(poll);
      
      // Connect provider to interact with contract
      App.contracts.Poll.setProvider(App.web3Provider);

      return App.render();
    });
  },

  render: function(){
    var loader = $("#load");
    var content = $("#afterload");
    document.getElementById('load').style.display = 'none';
    document.getElementById('afterload').style.display = 'block';
    loader.hide();
    content.show();
  },

  createPoll: function(){
    
    op1 = document.getElementById('op1').value;
    op2 = document.getElementById('op2').value;
    op3 = document.getElementById('op3').value;
    op4 = document.getElementById('op4').value;
    //console.log(opt1v);
    //var code = App.makeCode();
    var code = 'abcdek';
    o1c=0; o2c=0; o3c=0; o4c=0;
    var account1;
    // web3.eth.getAccounts().then(function(acc){account1=acc});
    // console.log(account1);
    //web3.eth.requestAccounts().then(console.log);
    // web3.eth.requestAccounts().then(function(account) {
      
    //   App.account = account[0];
       $("#accountAddress").html("Your Account: " + App.account);
      
    // });
    console.log(op1);
    var PollInst;
    App.contracts.Poll.deployed().then(function(instance) {
      PollInst=instance;
      return instance.newPoll(code, op1, op2, op3, op4, { from: App.account });
    });
    //var opt1c=App.contracts.Poll.deployed().then(function(i){ return i.c1();});
    var shwtbl=document.getElementById('table');
    // App.contracts.Poll.deployed().then(function(pi){
    //   pi.getOpt1(code, { from: App.account }).then(function(opts){
    //       //var option1=opts[0];
    //       var id;
    //       opts[0].then(function(i){ id = i;});
    //       var name=opts[1];
    //       var voteCount=opts[2];
    //       var candidateTemplate = "<tr><th>" + id + "</th><td>" + "opt1c" + "</td><td>" + "0" + "</td></tr>";
    //       console.log(name);
    //       shwtbl.append(candidateTemplate);
    //     });
    // });
    var candidateTemplate = "<tr><th>" + "1" + "</th><td>" + op1 + "</td><td>" + "0" + "</td></tr>";
    shwtbl.append(candidateTemplate);
    candidateTemplate = "<tr><th>" + "2" + "</th><td>" + op2 + "</td><td>" + "0" + "</td></tr>";
    shwtbl.append(candidateTemplate);
    candidateTemplate = "<tr><th>" + "3" + "</th><td>" + op3 + "</td><td>" + "0" + "</td></tr>";
    shwtbl.append(candidateTemplate);
    candidateTemplate = "<tr><th>" + "4" + "</th><td>" + op4 + "</td><td>" + "0" + "</td></tr>";
    shwtbl.append(candidateTemplate);
    var opt1c=App.contracts.Poll.deployed().then(function(i){ return i.c1();});
    document.getElementById('load').style.display = 'block';
    document.getElementById('tablediv').style.display = 'block';
    
    // PollInst.polls(1).then(function(candidate) {
    //   var id = candidate[0];
    //   var name = candidate[1];
    //   var voteCount = candidate[2];

    //   // Render candidate Result
    //   var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>";
    //   shwtbl.append(candidateTemplate);

    // });
    // PollInst.polls(2).then(function(candidate) {
    //   var id = candidate[0];
    //   var name = candidate[1];
    //   var voteCount = candidate[2];

    //   // Render candidate Result
    //   var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>";
    //   shwtbl.append(candidateTemplate);

    // });
    // PollInst.polls(3).then(function(candidate) {
    //   var id = candidate[0];
    //   var name = candidate[1];
    //   var voteCount = candidate[2];

    //   // Render candidate Result
    //   var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>";
    //   shwtbl.append(candidateTemplate);

    // });
    // PollInst.polls(4).then(function(candidate) {
    //   var id = candidate[0];
    //   var name = candidate[1];
    //   var voteCount = candidate[2];

    //   // Render candidate Result
    //   var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>";
    //   shwtbl.append(candidateTemplate);

    // });
    

    // App.contracts.Poll.deployed().then(function(instance) {
    //   return instance.getOpt1Count(code, { from: App.account });
    // });
    //var opt1c=App.contracts.Poll.deployed().then(function(i){ return i.opCount();});
    console.log("neeche");
    console.log(opt1c);
    console.log("upar");
    
    
  },
  makeCode: function() {
    var length=6;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result;
  },
  whichCode: function(){
    var code = document.getElementById('code').value;


  },

  bindEvents: function() {
    
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }

};

// function createPoll(){
//   var opt1v = document.getElementById('opt1').value;
//   console.log(opt1v);
//   document.getElementById('load').style.display = 'block';
//   document.getElementById('afterload').style.display = 'block';
// }

$(function() {
  $(window).load(function() {
    App.init();
  });
});
