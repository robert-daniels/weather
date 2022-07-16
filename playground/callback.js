/**
 * playground, not for production. Working with callback functions
 */

// const geocode = (address, callback) => { // make a function that takes a string and a callback fx as args
//     setTimeout(() => { // simulate an async api call
//         const data = { // hardcoding the data, in production will be the results of the api call
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data); // cannot use return, since this is async. instead, use the callback function, passing the 'returned data from api' to it
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {  // call the function, data from the async above passes into the callback, which then runs
//     console.log(data);  
// })

// --------------- challenge ---------------

/**
 * takes 2 numbers and adds them. 
 * 
 * @async 
 * @param {number} num1 
 * @param {number} num2 
 * @param {function} callback function passed on how to handle the sum once calculated. 
 * @example add(1, 4, (sum) => {console.log(sum)}) will prints 5 to the console. 
 */

const add = (num1, num2, callback) => {
    setTimeout(() => {
        const answer = num1 + num2;
        callback(answer);  
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum); // the callback has to be defined in the async, as defined in main will expire before the fx moves into stack
})