const multiplyNumbers = (myArray) => {
    myPromise = new Promise((resolve, reject) => {
        let newArr = [];
        let toFilter = myArray.map(el =>{
            if(typeof el != 'number'){
                //reject('Error: Non numeric element in array');
            }else{
                newArr.push(el * 5);   
            }
        })
        resolve(console.log(newArr));
    }); 
}
let arr = ['Matrix',1,true,2,false,3]
multiplyNumbers(arr);
