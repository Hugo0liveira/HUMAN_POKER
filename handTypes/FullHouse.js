
function fullhousePairPower(player) {
    // check for full house. If the player's hand has a three of a kind and a pair, then the player has a full house.
    // trecho que dava erro && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power 
    var pairPower = -10; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {
                  // check for three of a kind and best pair
                  if(player.hand[g].power == player.hand[h].power && player.hand[g].power == player.hand[i].power && player.hand[j].power == player.hand[k].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) { 
                   pairPower = player.hand[j].power ;
                    if(player.hand[g].power == player.hand[h].power && player.hand[g].power == player.hand[i].power && player.hand[j].power == player.hand[k].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m && player.hand[j].power > player.hand[l].power && player.hand[j].power > player.hand[m].power) { 
                      pairPower = player.hand[j].power ;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }      
    console.log("pairPower: " + pairPower); 
    return pairPower;
}


function fullhouseThreeOfAKindPower(player) {
    // check for full house. If the player's hand has a three of a kind and a pair, then the player has a full house.
    // trecho errado  && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power
    var threeOfAKindPower = -10; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {
                  // check for three of a kind and best pair
                  if(player.hand[g].power == player.hand[h].power && player.hand[g].power == player.hand[i].power && player.hand[j].power == player.hand[k].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {                     
                    threeOfAKindPower = player.hand[g].power;
                      if(player.hand[g].power == player.hand[h].power && player.hand[g].power == player.hand[i].power && player.hand[j].power == player.hand[k].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m  && player.hand[g].power > player.hand[l].power && player.hand[g].power > player.hand[m].power) { 
                        threeOfAKindPower = player.hand[g].power;
                      }
                    }
                  } 
                }
              }
            }
          }
        }
      }
    
    console.log("threeOfAKindPower: " + threeOfAKindPower);
    return threeOfAKindPower;
}    

function fullhouse(player) {
    // check for full house. If the player's hand has a three of a kind and a pair, then the player has a full house.  
    // trecho que dava erro && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power
    var fullHouse = 0; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {
                  // check for three of a kind and best pair
                  if(player.hand[g].power == player.hand[h].power && player.hand[g].power == player.hand[i].power && player.hand[j].power == player.hand[k].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) { 
                    fullHouse = 1; 
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("fullHouse: " + fullHouse);
    return fullHouse;
}

export { fullhousePairPower, fullhouseThreeOfAKindPower, fullhouse };