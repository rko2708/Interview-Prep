function computeAmount() {
  let amount = 0;
  let obj = {};
  obj.lacs = (amountsToBeAdded) => {
    amount += amountsToBeAdded * 100000;
    return obj;
  }
  obj.crore = (amountsToBeAdded) => {
    amount += amountsToBeAdded * 10000000;
    return obj;
  }
  obj.thousand = (amountsToBeAdded) => {
    amount += amountsToBeAdded * 1000;
    return obj;
  }
  obj.value = () => {
    return amount;
  }
  return obj;
}

console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()); 
