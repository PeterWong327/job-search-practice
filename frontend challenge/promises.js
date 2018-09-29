function fakeAjax(data) {
  // return a promise
  // inside of this function, use window.setTimeout to fake latency
  const response = `did you say you wanted ${data} donuts?`;
  return new Promise( (resolve, reject) => {
      window.setTimeout(() => resolve(response), 5000)

  })

}

fakeAjax(3).then((res) => console.log(res))





function pAll(promArr) {
  // return a promise with the responses of the other resolve promises as the res
  // exit early if any promise gets rejected
    // if exits early due to rejected promise, the return value is a rejected promise
  return new Promise( (resolve, reject) => {
    let result = []; //keep track of all resolved responses
    let errored = false;

    for (let i = 0; i < promArr.length; i += 1) {
      promArr[i] //individual promise
      .then(res => {
        if(errored) return;
        result.push(res);
        if (result.length >= promArr.length) {
          resolve(result);
        }
      })
      .catch(err => {
        errored = true;
        reject(err);
      });
    }
  });
}

//test case
pAll([
  Promise.resolve("string"),
  Promise.resolve("string2"),
  Promise.resolve("string3"),
  Promise.reject(new Error("fail1"))
]);
