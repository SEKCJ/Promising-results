$(document).ready(() => {

    // slowMath.add(1, 1).then((value) => {
    //     console.log(value);
    //     return slowMath.multiply(value, 2)
    // }).then((value) => {
    //     console.log(value);
    //     return slowMath.divide(value, 4)
    // }).then((value) => {
    //     console.log(value);
    //     return slowMath.subtract(value, 3);
    // }).then((value) => {
    //     console.log(value);
    //     return slowMath.add(value, 98);
    // }).then((value) => {
    //     console.log(value);
    //     return slowMath.remainder(value, 2)
    // }).then((value) => {
    //     console.log(value);
    //     return slowMath.multiply(value, 50)
    // }).then((value) => {
    //     console.log(value);
    //     return slowMath.remainder(value, 40)
    // }).then((value) => {
    //     console.log(value);
    //     return slowMath.add(value, 32)
    // }).then((value) => {
    //     console.log(value);
    //     return console.log(`The Final value ${value}`)
    // }).catch((e) => {
    //     return console.log(e)
    // })


    let doMath = async () => {
        try {
            let result = await slowMath.add(6, 2)
            console.log(result);
            result = await slowMath.multiply(result, 2);
            console.log(result);
            result = await slowMath.divide(result, 4);
            console.log(result);
            result = await slowMath.subtract(result, 3);
            console.log(result);
            result = await slowMath.add(result, 98);
            console.log(result);
            result = await slowMath.remainder(result, 2);
            console.log(result);
            result = await slowMath.multiply(result, 50);
            console.log(result);
            result = await slowMath.remainder(result, 40);
            console.log(result);
            result = await slowMath.add(result, 32);
            console.log(result);
            return console.log(`The final result is ${result}`)

        } catch (error) {
            return console.log(error)
        }
    }
    doMath();

})