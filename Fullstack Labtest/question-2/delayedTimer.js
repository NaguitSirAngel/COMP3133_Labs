const delayedTimer = (myNum) => {
    setTimeout( () => {
        resolve(myNum*myNum);
    }, 500);
}


const delayedPromise = (myNum) => {
    const myPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(myNum * myNum);
        }, 500)
    })
    return myPromise;
}


const delayedPromise2 = (myNum) => {
    const myPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(myNum * myNum);
        }, 500)
    })
    return myPromise;
}


Promise.all([delayedPromise(6), delayedPromise2(7)]).then((val) => console.log(val));


