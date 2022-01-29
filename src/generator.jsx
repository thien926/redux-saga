// console.log('==================== learning generator function ============================');
// function* helloGeneratorFunction() {
//     yield 2019;
//     return 'Tự học lập trình redux-saga';
// }

// const result = helloGeneratorFunction();    //iterator
// console.log('result 1: ', result.next());
// console.log('result 2: ', result.next());
// console.log('result 3: ', result.next());
// console.log('==================== done generator function ===============================');


// console.log('==================== vòng lặp vô tận ============================');
// function* helloGeneratorFunction() {
//     while (true) {
//         yield 'Tôi đang lắng nghe...';
//     }
// }

// const iterator = helloGeneratorFunction();
// console.log('Result 1: ', iterator.next());
// console.log('Result 2: ', iterator.next());
// console.log('==================== done vòng lặp vô tận ===============================');


// console.log('==================== generator function: generator trong generator ============================');
// function* printName() {
//     yield 'redux-saga';
// }

// function* hello() {
//     yield 'xin chào';

//     // const nameIterator = printName();
//     // yield nameIterator.next();

//     yield* printName();

//     yield '. Kết thúc.';
// }

// const iterator = hello();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log('==================== done generator function: generator trong generator ===============================');