/**
 * duyệt mảng
 */
let arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(function (value) {
    console.log(value);
});


/**
 * map function
 */
let newArr = arr.map((value) => value + 2);
console.log(newArr);

arr.map((value) => value + 2).forEach(value => console.log(value));


/**
 * filter function
 */
let filArr = arr.filter(value => value > 5);
console.log(filArr);

arr.filter(value => value > 5).forEach(value => console.log(value));


/**
 * promise
 */
function delay(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
        setTimeout(reject, ms);
    })
}

delay(2000).then(() => {
    console.log("typescript");
    return delay(2000)
})
    .then(() => {
        console.log("angular");
        return delay(2000);
    })

    //  setTimeout(reject, ms);
    .catch(() => {
        console.log("error")
    })
