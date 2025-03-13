const prom = (text) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(text)
      }, 1000)
    })
  }
  
  prom("ERROR!!!!!!!!!!!!!!!!")
    .catch(error => console.log(error));