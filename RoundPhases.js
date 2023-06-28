
import { shuffleDeck, cleanAllCommunityCards, distributeCards1, distributeCards2, addCardOnCommunityCards1, addCardOnCommunityCards2, addCardOnCommunityCards3, addCardOnCommunityCards4, addCardOnCommunityCards5, concatenateHand } from "./DeckManipulation.js";
import {determineWinnersHand} from "./DetermineWinnersHand.js";
import { Variables } from "./Variables.js"
import {functionStart} from "./main.js"

// Buttons functions 
function functionFold(event) {  
  deathKiss(); 
  // to delay the execution of the next line of code
  setTimeout( awaitToFold, 2000);

  function awaitToFold() {  
    window.alert(Variables.messageFold);
    event.stopPropagation(); // Stop event propagation
        if(Variables.conditionsPreflop==1){
          Variables.fold = 1; checkConditionsPreFlop(); 
        } else if(Variables.conditionsFlop==1){
          Variables.fold = 2; checkConditionsFlop(); 
        } else if(Variables.conditionsTurn==1){
          Variables.fold = 3; checkConditionsTurn(); 
        } else if(Variables.conditionsRiver==1){
          Variables.fold = 4; checkConditionsRiver(); 
        }
  }
}

function functionCall(event) {
  event.stopPropagation(); // Stop event propagation     
  if(Variables.conditionsPreflop==1){
    Variables.call = 1; checkConditionsPreFlop(); 
    } else if(Variables.conditionsFlop==1){
      Variables.call = 2; checkConditionsFlop(); 
    } else if(Variables.conditionsTurn==1){
      Variables.call = 3; checkConditionsTurn(); 
    } else if(Variables.conditionsRiver==1){
      Variables.call = 4; checkConditionsRiver(); 
    }
}

function functionCheck(event) {
  event.stopPropagation(); // Stop event propagation
  if(Variables.conditionsPreflop==1){
    Variables.check = 1; checkConditionsPreFlop(); 
    } else if(Variables.conditionsFlop==1){
    Variables.check = 2; checkConditionsFlop(); 
  } else if(Variables.conditionsTurn==1){
    Variables.check = 3; checkConditionsTurn(); 
  } else if(Variables.conditionsRiver==1){
    Variables.check = 4; checkConditionsRiver(); 
  }
}

function functionRaise(event) {            
  event.stopPropagation(); // Stop event propagation
  if(Variables.conditionsPreflop==1){
    Variables.raise=1; checkConditionsPreFlop();
  } else if(Variables.conditionsFlop==1){ 
    Variables.raise = 2; checkConditionsFlop(); 
  } else if(Variables.conditionsTurn==1){ 
    Variables.raise = 3; checkConditionsTurn(); 
  } else if(Variables.conditionsRiver==1){ 
    Variables.raise = 4; checkConditionsRiver(); 
  } 
}

  const foldButton = document.querySelector(".btn-fold");
  const callButton = document.querySelector(".btn-call");
  const checkButton = document.querySelector(".btn-check");
  const raiseButton = document.querySelector(".btn-raise");

//CHECK CONDITIONS BUTTONS on each phase of the game
function checkConditionsPreFlop() {  
  if(Variables.conditionsPreflop==1){
      if (Variables.fold == 1) {
        //window.alert("FOLD on Phase PRE-FLOP! ");             
        Variables.player1.chips -= Variables.risk; Variables.player2.chips += Variables.risk;  Variables.infoRisk.innerHTML = Variables.risk;
        Variables.preflop = 1; Variables.flop = 0; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhasePreFlop();
      }  
      if (Variables.call == 1) {        
       // window.alert("CALL on Phase PRE-FLOP! ");         
        Variables.preflop = 0; Variables.flop = 1; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhaseFlop(Variables.player1, Variables.player2); 
      }  
      if (Variables.check == 1) {
        Variables.check == 0;
        window.alert("Check button is not used on preflop phase!");          
      }
      if (Variables.raise == 1) {
        //window.alert("RAISE on Phase PRE-FLOP! ");     
        if(Variables.player1.chips >= Variables.risk*2){
          Variables.risk = Variables.risk + Variables.risk; 
          Variables.infoRisk.innerHTML = Variables.risk;        
          Variables.raise = 0; Variables.flop = 1; Variables.turn = 0; Variables.river = 0; Variables.conditionsPreflop=0;
         console.log("RAISE on Phase PRE-FLOP");                         
         PhaseFlop();
        } else {
          window.alert("Not enough lives!");     
        }
      }
      console.log("CheckConditionsPreFlop");                         
    }                       
}        

function checkConditionsFlop() {  
  
  if(Variables.conditionsFlop==1){
      if (Variables.fold == 2) {
       // window.alert("FOLD on Phase FLOP! ");     
        Variables.player1.chips -= Variables.risk; Variables.player2.chips += Variables.risk;  Variables.infoRisk.innerHTML = Variables.risk;
        Variables.preflop = 1; Variables.flop = 0; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhasePreFlop();
      }  
      if (Variables.call == 2) {          
        Variables.call == 0;
        window.alert("Call button is NOT used on Phase FLOP! ");             
      }    
      if (Variables.check == 2) {
       // window.alert("CHECK on Phase FLOP! ");     
        Variables.preflop=0; Variables.flop =0; Variables.turn = 1; Variables.river=0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhaseTurn();
      }    
      if (Variables.raise == 2) {
       // window.alert("RAISE on Phase FLOP! ");     
        if(Variables.player1.chips >= Variables.risk*2){
          Variables.risk = Variables.risk + Variables.risk;
          Variables.infoRisk.innerHTML = Variables.risk;
          Variables.preflop = 0; Variables.flop = 0; Variables.conditionsFlop=0; Variables.river = 0; Variables.turn = 1;
          console.log("RAISE on Phase FLOP");                                 
          PhaseTurn();
          } else{
            window.alert("Not enough lives!");     
          }
      }
      console.log("CheckConditionsFlop");                         
    }                           
}        

function checkConditionsTurn() {  
  if(Variables.conditionsTurn==1){
      if (Variables.fold == 3) {
     //   window.alert("FOLD on Phase TURN! ");     
        Variables.player1.chips -= Variables.risk; Variables.player2.chips += Variables.risk;  Variables.infoRisk.innerHTML = Variables.risk;
        Variables.preflop = 1; Variables.flop = 0; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhasePreFlop();
      }  
      if (Variables.call == 3) {          
        Variables.call == 0;
        window.alert("Call button is NOT used on Phase TURN! ");             
      }    
      if (Variables.check == 3) {
    //    window.alert("CHECK on Phase TURN! ");     
        Variables.preflop=0; Variables.flop =0; Variables.turn=0; Variables.river=1; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhaseRiver();
      }    
      if (Variables.raise == 3) {  
     //   window.alert("RAISE on Phase TURN! ");         
        if(Variables.player1.chips >= Variables.risk*2){
          Variables.risk = Variables.risk + Variables.risk;
          Variables.infoRisk.innerHTML = Variables.risk;
          Variables.preflop = 0;  Variables.flop = 0; Variables.turn = 0; Variables.conditionsTurn=0; Variables.river = 1; 
      //    console.log("RAISE on Phase TURN! ");         
        PhaseRiver();        
          } else{
            window.alert("Not enough lives!");     
          }                 
      }
      console.log("CheckConditionsTurn");                         
    }      
}        

function checkConditionsRiver() {  
  if(Variables.conditionsRiver==1){    
      if (Variables.fold == 4) {
    //    window.alert("FOLD on Phase RIVER! ");     
        Variables.player1.chips = Variables.player1.chips - (Variables.risk*2); Variables.player2.chips += Variables.risk;  Variables.infoRisk.innerHTML = Variables.risk;
        Variables.preflop = 1; Variables.flop = 0; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;    
        PhasePreFlop();
      }  
      if (Variables.call == 4) {          
        Variables.call == 0;
        window.alert("Call button is NOT used on Phase RIVER! ");             
      }    
      if (Variables.check == 4) {
     //   window.alert("CHECK on Phase RIVER! ");     
        Variables.preflop=0; Variables.flop =0; Variables.turn =0; Variables.river=0; Variables.comparehands=1; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        distributeCards2();
        setTimeout( awaitComparingHands, 3000);      
        function awaitComparingHands() {  
          compareTheHands();
        }
      }    
      if (Variables.raise == 4) {        
     //   window.alert("RAISE on Phase RIVER! ");     
        if(Variables.player1.chips >= Variables.risk*2){
          Variables.risk = Variables.risk + Variables.risk;
          Variables.infoRisk.innerHTML = Variables.risk;
          Variables.preflop = 0;  Variables.flop = 0; Variables.turn = 0; Variables.conditionsRiver=0; Variables.comparehands=1;
          // comparar cartas e decidir vencedor de rodada          
          distributeCards2();
          setTimeout( awaitComparingHands, 4000);        
          function awaitComparingHands() {  
          compareTheHands();
          }
      //    console.log("RAISE on Phase RIVER! ");     
          } else{
            window.alert("Not enough lives!");     
          }       
      }
      console.log("CheckConditionsRIVER");
    } 
  }     

// PHASES OF THE GAME
function PhasePreFlop(){    
  // select <div class="invisible"> HTML element and change the CSS all the elements inside to visible
  const invisibleHTML = document.querySelector('.invisible');
  invisibleHTML.style.visibility = "visible";
  // select <div class="invisible2"> HTML element and change the CSS all the elements inside to visible
  const invisible2HTML = document.querySelector('.invisible2');
  invisible2HTML.style.visibility = "visible";


  AppearButtonCall();
  DisappearButtonCheck();
  Variables.chips1Html.innerHTML = Variables.player1.chips;
  Variables.chips2Html.innerHTML = Variables.player2.chips;
  cleanAllCommunityCards();
  // refill deck with original deck
  Variables.deck = [];
  Variables.deck = Variables.deck.concat(Variables.originalDeck);  
  Variables.deck = shuffleDeck();    
    console.log("deck:", Variables.deck);
    console.log("originalDeck:", Variables.originalDeck);
      gameLost();
    if(Variables.preflop==1){
      Variables.conditionsPreflop=1; Variables.conditionsFlop=0; Variables.conditionsTurn=0; Variables.conditionsRiver=0; 
      Variables.fold = 0; Variables.check = 0; Variables.call = 0; Variables.raise = 0;      
      Variables.deck = distributeCards1();             
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhasePreflop");      
    }
  }

  function PhaseFlop(){    
    DisappearButtonCall();
    AppearButtonCheck();
    gameLost();
    if (Variables.flop == 1) { //flop
      Variables.conditionsPreflop=0; Variables.conditionsFlop=1; Variables.conditionsTurn=0; Variables.conditionsRiver=0;    
      Variables.fold = 0; Variables.check = 0; Variables.call = 0; Variables.raise = 0;                    
      // remove previous community cards  
      cleanAllCommunityCards();
         // PUTS 3 COMMUNITY CARDS
        addCardOnCommunityCards1(); addCardOnCommunityCards2(); addCardOnCommunityCards3();
        foldButton.addEventListener("click", functionFold);
        callButton.addEventListener("click", functionCall);
        checkButton.addEventListener("click", functionCheck);
        raiseButton.addEventListener("click", functionRaise);
        console.log("PhaseFLop");
   }//flop     
  }
  
  function PhaseTurn(){
    gameLost();
    if (Variables.turn == 1) { //turn
      Variables.conditionsPreflop=0; Variables.conditionsFlop=0; Variables.conditionsTurn=1; Variables.conditionsRiver=0;
      Variables.fold = 0; Variables.check = 0; Variables.call = 0;  Variables.raise = 0;
      addCardOnCommunityCards4();
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);     
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhaseTurn");
    }
  }
  function PhaseRiver(){    
    gameLost();
    if (Variables.river == 1) { //river
      Variables.conditionsPreflop=0; Variables.conditionsFlop=0; Variables.conditionsTurn=0; Variables.conditionsRiver=1;
      Variables.fold = 0; Variables.check = 0; Variables.call = 0; Variables.raise = 0;
      addCardOnCommunityCards5();
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhaseRiver");      
    }//river      
  }
  
function compareTheHands(){      
    if (Variables.comparehands == 1) { //river
      Variables.preflop=1;
      Variables.fold = 0; Variables.check = 0; Variables.call = 0;  Variables.raise = 0;
      Variables.conditionsPreflop=1; Variables.conditionsFlop=0; Variables.conditionsTurn=0; Variables.conditionsRiver=0;       

    console.log("compareTheHands()");  
   // window.alert("COMPARING HANDS... ");
    
    var roundWinner = determineWinnersHand();   

        if(roundWinner == 0){
          window.alert("DRAW!");  
          console.log("DRAW!");    
          PhasePreFlop();         
        }

        if(roundWinner == 1){
          roundLostDeathKiss();
          window.alert("HUMANITY won the round.");
          console.log("HUMANITY won the round.");
          Variables.player1.chips += Variables.risk;      
          Variables.player2.chips -= Variables.risk;   
          // to delay the execution of the next line of code
          setTimeout( awaitReaction1, 3000);
          function awaitReaction1() {
            PhasePreFlop();    
          }
        } 

        if(roundWinner == 2){
          roundWonDeathReaction()
          //window.alert("DEATH won the round.");
          console.log("DEATH won the round.");
          Variables.player1.chips -= Variables.risk;      
          Variables.player2.chips += Variables.risk; 
          // to delay the execution of the next line of code
          setTimeout( awaitReaction2, 2000);
          function awaitReaction2() {   
            gameLost();   
            PhasePreFlop();    
          }      
        } 
        if (roundWinner != 0 && roundWinner != 1 && roundWinner != 2) {
          window.alert("ERROR: roundWinner");
          console.log("ERROR: roundWinner");
        } 
        // update chips on screen
        Variables.chips1Html.innerHTML = Variables.player1.chips.toString();      
        Variables.chips2Html.innerHTML = Variables.player2.chips.toString();   
      
        
      if(Variables.player2.chips <= 0){ 
          window.alert(Variables.messageNietzscheWin1);
          // load video from youtube https://www.youtube.com/watch?v=pw4VEW3StIw  
          const container = document.querySelector('#end');
          window.alert(Variables.messageNietzscheWin2);
          container.innerHTML = '<iframe width="1080" height="1080" src="https://www.youtube.com/embed/VbJm1OcII-g?autoplay=1" frameborder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                  
          
        } else{        
          Variables.years = parseInt(Variables.infoYears.innerHTML); 
          Variables.years += 1;
          Variables.infoYears.innerHTML = Variables.years.toString();                    
          }
        }

        
  }

  function resetGame() {
    window.alert(Variables.messageDoTheEvolution1);
    window.alert(Variables.messageDoTheEvolution2);
    window.alert(Variables.messageDoTheEvolution3);
    window.alert(Variables.messageDoTheEvolution4);
    
    // Reset variables    
    Variables.game = 0; Variables.conditionsPreflop = 0;  Variables.conditionsFlop = 0;  Variables.conditionsTurn = 0;  Variables.conditionsRiver = 0;
    Variables.preflop = 0;  Variables.flop = 0;  Variables.turn = 0;  Variables.river = 0;  Variables.comparehands = 0;
    Variables.fold = 0; Variables.call = 0; Variables.check = 0;  Variables.raise = 0;    
    Variables.risk = 67100000;
    Variables.years = 300000;
    Variables.player1.chips = 8000000000; Variables.player2.chips = 107000000000;   
    // Reset DOM elements
    Variables.infoYears.innerHTML = Variables.years;
    Variables.infoRisk.innerHTML = Variables.risk;  
    functionStart();
  }

  // Disapear buttons
  function DisappearButtonCheck(){
   const checkButton = document.querySelector('.btn-check');
   checkButton.innerHTML = "";    
   // change css to transparent
     checkButton.style.backgroundColor = "transparent";
      checkButton.style.color = "transparent";
  }
  function DisappearButtonCall(){
    const callButton = document.querySelector('.btn-call');    
    // change css to transparent
    callButton.style.backgroundColor = "transparent";
    callButton.style.color = "transparent";
  }
  function DisappearButtonRaise(){
    const raiseButton = document.querySelector('.btn-raise');
    raiseButton.innerHTML = "";
    // change css to transparent
    raiseButton.style.backgroundColor = "transparent";
    raiseButton.style.color = "transparent";
  }
  function DisappearButtonFold(){
    const foldButton = document.querySelector('.btn-fold');
    foldButton.innerHTML = "";
    // change css to transparent
    foldButton.style.backgroundColor = "transparent";
    foldButton.style.color = "transparent";
  }
  
  // Appear buttons
  function AppearButtonCheck(){
    const checkButton = document.querySelector('.btn-check');
    checkButton.innerHTML = ` 
    <button class="btn-check" onclick="functionCheck()">Check</button>  
    `;  
  }
  function AppearButtonCall(){
    const callButton = document.querySelector('.btn-call');
    // undo the transparence of css     
    callButton.style.backgroundColor = "#f3de21";
    callButton.style.color = "rgb(0, 0, 0)";         
  }
  function AppearButtonRaise(){
    const raiseButton = document.querySelector('.btn-raise');
    raiseButton.innerHTML = `
    <button class="btn-raise" onclick="functionRaise()">Raise</button> 
    `;
  }
  function AppearButtonFold(){
    const foldButton = document.querySelector('.btn-fold');
    foldButton.innerHTML = `
    <button class="btn-fold" onclick="functionFold()">Fold</button>
    `;
  }
     
  // show image when Death wins round
  function deathKiss() {    
    Variables.player2HandHTML.innerHTML = "";   
    const container = document.createElement('div');
    container.classList.add('deathKiss');
    container.innerHTML = `
    <div class="deathKiss">
    <img src="https://64.media.tumblr.com/8d92d659587f8434d360c8aaf123e1ca/tumblr_pb39eyKcr71w1y15so1_640.gif" alt="Death" class="deathKiss">
    </div>
    `;
    Variables.player2HandHTML.appendChild(container);
  }

  // show gif when Death wins game
  function deathDancing() {        
    //cleanAllCommunityCards();
    Variables.player2HandHTML.innerHTML = "";   
  //  Variables.player1HandHTML.innerHTML = "";   
    const container = document.createElement('div');
    container.classList.add('deathDancing');
    container.innerHTML = `
    <div class="deathDancing">
    <img src="https://steamuserimages-a.akamaihd.net/ugc/158030922591272127/DA8CFF0E533C01FB45C950F858B33501B6DB8F15/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="Death" class="deathDancing">
    </div>
    `;        
    document.body.innerHTML = "";
    document.body.appendChild(container);
  }

  function deathDancingAdd() {         
  //  Variables.player1HandHTML.innerHTML = "";   
    const container = document.createElement('div');
    container.classList.add('deathDancingAdd');
    container.innerHTML = `
    <div class="deathDancingAdd">
    <img src="https://steamuserimages-a.akamaihd.net/ugc/158030922591272127/DA8CFF0E533C01FB45C950F858B33501B6DB8F15/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="Death" class="deathDancingAdd">
    </div>
    `;            
    document.body.appendChild(container);    
  }
  
  function gameLost() {
    if (Variables.player1.chips < 0) {        
      deathDancing(); 
      deathDancingAdd(); 
      deathDancingAdd(); 
      deathDancingAdd(); 
      deathDancingAdd(); 
      deathDancingAdd();       
      deathDancingAdd();       
      deathDancingAdd();       
      deathDancingAdd();       
      deathDancingAdd();       
      // to delay the execution of the next line of code
        setTimeout( awaitToEnd, 11000);
        function awaitToEnd() {            
          resetGame();
        }
    }    
  }

  // welcome from Death
  function welcomeDeath() {
    Variables.player2HandHTML.innerHTML = "";   
    const container = document.createElement('div');
    container.classList.add('welcomeDeath');
    container.innerHTML = `
    <div class="welcomeFromDeath">
    <img src="https://media.tenor.com/r1Z2IxWoyN4AAAAC/yeah-pearl.gif" alt="Death" class="welcomeDeath">
    </div>
    `;    
    Variables.player2HandHTML.appendChild(container);    
  }

  function welcomeDeathAdd1() {    
    const container = document.createElement('div');
    container.classList.add('welcomeDeathAdd1');
    container.innerHTML = `
    <div class="welcomeDeathAdd">
    <img src="https://media.tenor.com/r1Z2IxWoyN4AAAAC/yeah-pearl.gif" alt="Death" class="welcomeDeathAdd1">
    </div>
    `;    
    const containerAlreadyExistent = document.querySelector('.container');
    Variables.player2HandHTML.appendChild(container);      
  }

  function welcomeDeathAdd2() {    
    const container = document.createElement('div');
    container.classList.add('welcomeDeathAdd2');
    container.innerHTML = `
    <div class="welcomeDeathAdd">
    <img src="https://media.tenor.com/r1Z2IxWoyN4AAAAC/yeah-pearl.gif" alt="Death" class="welcomeDeathAdd2">
    </div>
    `;    
    const containerAlreadyExistent = document.querySelector('.container');
    Variables.player2HandHTML.appendChild(container);      
  }

  
  function welcomeDeathAdd3() {    
    const container = document.createElement('div');
    container.classList.add('welcomeDeathAdd3');
    container.innerHTML = `
    <div class="welcomeDeathAdd">
    <img src="https://media.tenor.com/r1Z2IxWoyN4AAAAC/yeah-pearl.gif" alt="Death" class="welcomeDeathAdd3">
    </div>
    `;    
    const containerAlreadyExistent = document.querySelector('.container');
    Variables.player2HandHTML.appendChild(container);      
  }

  function welcomeDeathAdd4() {    
    const container = document.createElement('div');
    container.classList.add('welcomeDeathAdd4');
    container.innerHTML = `
    <div class="welcomeDeathAdd">
    <img src="https://media.tenor.com/r1Z2IxWoyN4AAAAC/yeah-pearl.gif" alt="Death" class="welcomeDeathAdd4">
    </div>
    `;    
    const containerAlreadyExistent = document.querySelector('.container');
    Variables.player2HandHTML.appendChild(container);      
  }

  function welcomeDeathAdd5() {    
    const container = document.createElement('div');
    container.classList.add('welcomeDeathAdd4');
    container.innerHTML = `
    <div class="welcomeDeathAdd">
    <img src="https://media.tenor.com/r1Z2IxWoyN4AAAAC/yeah-pearl.gif" alt="Death" class="welcomeDeathAdd5">
    </div>
    `;    
    const containerAlreadyExistent = document.querySelector('.container');
    Variables.player2HandHTML.appendChild(container);      
  }

  // round lost death reaction gif
  function roundLostDeathKiss() {
    Variables.player2HandHTML.innerHTML = "";   
    const container = document.createElement('div');
    container.classList.add('roundLostDeathKiss');
    container.innerHTML = `
    <div class="roundLostDeath">
    <img src="https://64.media.tumblr.com/7245eb81aaa356947db5690c28307d41/8ea40b1b3bd96097-ff/s540x810/19bb94a74b5f74fa9c4fd668f7dd9afdaa6d2777.gifv" alt="Death" class="roundLostDeathKiss">
    </div>
    `;    
    Variables.player2HandHTML.appendChild(container);    
  }

  // round won death reaction gif
  function roundWonDeathReaction() {
    Variables.player2HandHTML.innerHTML = "";
    const container = document.createElement('div');
    container.classList.add('roundWonDeathReaction');
    container.innerHTML = `
    <div class="roundWonDeath">
    <img src="https://3.bp.blogspot.com/-KyTwIisMGxg/VlXlvxRNsXI/AAAAAAAAi0Y/R8tSYHJBi1M/s1600/ownnn%2Bmas%2Beh%2Buma%2Bfofa.gif" alt="Death" class="roundWonDeathReaction">
    </div>
    `;
    Variables.player2HandHTML.appendChild(container);
  }


  export { functionFold, functionCall, functionCheck, functionRaise, foldButton, callButton, checkButton, raiseButton, checkConditionsPreFlop, checkConditionsFlop, checkConditionsTurn, checkConditionsRiver, PhasePreFlop, PhaseFlop, PhaseTurn, PhaseRiver, compareTheHands, resetGame, welcomeDeath, DisappearButtonCall, DisappearButtonCheck, DisappearButtonFold, DisappearButtonRaise, AppearButtonCheck, AppearButtonCall, gameLost, deathKiss, deathDancing, welcomeDeathAdd1, welcomeDeathAdd2, welcomeDeathAdd3, welcomeDeathAdd4, welcomeDeathAdd5 };
  