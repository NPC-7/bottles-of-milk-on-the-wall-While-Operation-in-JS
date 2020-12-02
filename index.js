function milk(){
  var milkCount=prompt("How many milk in the wall?");
  var buyAgain=milkCount;
  
  while(milkCount>=0){
    if(milkCount>1){
      console.log(milkCount + " bottles of milk on the wall, " + milkCount + " bottles of milk.");
      milkCount--;
    }else if(milkCount===1){
      console.log(milkCount + " bottle of milk on the wall, " + milkCount + " bottle of milk.");
      milkCount--;
    }else{
      console.log("No more bottles of milk on the wall, no more bottles of milk.");
      milkCount--;
    }

    if(milkCount>1){
      console.log("Take one down and pass it around, " + milkCount + " bottles on the wall.");
    }else if(milkCount===1){
      console.log("Take one down and pass it around, " + milkCount + " more bottle on the wall.");
    }else if(milkCount===0){
      console.log("Take one down and pass it around, no more bottles on the wall.");
    }else{
      console.log("Go to the store and buy some more, " + buyAgain + " bottles on the wall.");
    }
  }
}
