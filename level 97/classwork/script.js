const person = {
    name: "nata",
    lastName: "kvantaliani",
  };
  
  for (let i in person){
    if(person[i].length > 5){
    console.log(`${i}: ${person[i]}`);
}}