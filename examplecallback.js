function tryMe (param1, param2) {
    console.log(param1 + " and " + param2);
}

function callbackTester (callback, param1, param2) {
    callback(param1, param2);
}

callbackTester(tryMe, "hello", "goodbye");