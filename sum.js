function sum(a, b) {
    return a + b;
}

function obj() {
    return { name: "Manu" }
}

function string(str) {
    return str
}

function callback(cb) {
    return cb('hello')
}

function fetchData() {
    return new Promise((res, rej) => {
        res("Hello")
    })
}

function fetchData1(){
    return new Promise((res,rej)=>{
        res('done')
    })
}

function print(){
    return 'testing'
}

module.exports = { sum, obj, string, callback, fetchData, fetchData1, print };