function filter(numberArr = [1, 2, 3, 4, 5, 6, 7]){
    let evenNums = [];
    for (let num of numberArr){
      if (num % 2 === 0){
        evenNums.push(num);
      }
    }
    console.log(evenNums);
  }
  filter();