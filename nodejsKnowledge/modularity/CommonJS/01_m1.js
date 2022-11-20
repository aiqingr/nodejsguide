let a = 1
let b = 2
console.log("running")

console.log('exports', exports)
console.log(module.exports)

console.log(exports === module.exports);

// exports.a = "sunwukong"
// exports.b = "zhubajie"

module.exports = {
    c: "c",
    d: "d"
}