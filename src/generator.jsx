console.log('==================== learning generator function ============================');

function* helloGeneratorFunction() {
    yield 2019;
    return 'Tự học lập trình redux-saga';
}

const result = helloGeneratorFunction();    //iterator
console.log('result 1: ', result.next());
console.log('result 2: ', result.next());
console.log('result 3: ', result.next());

// console.log('result 1: ', helloGeneratorFunction().next());
// console.log('result 2: ', helloGeneratorFunction().next());
// console.log('result 3: ', helloGeneratorFunction().next());









console.log('==================== done generator function ===============================');