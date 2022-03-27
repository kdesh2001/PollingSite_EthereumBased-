// SPDX-License-Identifier: MIT
pragma solidity >=0.4.2;
pragma experimental ABIEncoderV2;
contract Poll{
    string public c1='hello';
    uint public opCount;
    struct option{
        uint n;
        string opt;
        uint count;
    }
    struct poll{
        //mapping(uint=>option) optionList;
        option opt1;
        option opt2;
        option opt3;
        option opt4;
    }
    mapping (string=>poll) public polls;
    //mapping(uint=>option) optionList;
    
    
    constructor () public{
        
    }
    function newPoll(string memory _code, string memory _op1,string memory _op2,string memory _op3,string memory _op4) public{
        uint optCount=1;
        option memory op1=option(optCount++,_op1,0);
        option memory op2=option(optCount++,_op2,0);
        option memory op3=option(optCount++,_op3,0);
        option memory op4=option(optCount,_op4,0);
        option[4] memory optionList;
        optionList[0]=op1;
        poll memory p = poll(op1,op2,op3,op4);
        polls[_code]=p;
    }
    function getOpt1 (string memory code) public returns(option memory) {
        c1=(polls[code].opt1).opt;
        return polls[code].opt1;
    }
    function getOpt2(string memory code) public returns(option memory) {
        return polls[code].opt2;
    }
    function getOpt3(string memory code) public returns(option memory) {
        return polls[code].opt3;
    }
    function getOpt4(string memory code) public returns(option memory) {
        return polls[code].opt4;
    }
    // function getOpt1Count(string memory code) public {
    //     opCount=(polls[code].opt1).count;
    // }
    // function getOpt2Count(string memory code) public {
    //     opCount=(polls[code].opt2).count;
    // }
    // function getOpt3Count(string memory code) public {
    //     opCount=(polls[code].opt3).count;
    // }
    // function getOpt4Count(string memory code) public {
    //     opCount=(polls[code].opt4).count;
    // }
    //function vote()

}