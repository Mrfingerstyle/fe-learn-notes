const fs = require('fs')

function read_1() {
    return new Promise((resolve, reject)=>{
        fs.readFile('./01-课程简介.html', (err, data)=>{
            if (err) reject(err)
            resolve(data)
        })
    })
}

function read_2() {
    return new Promise((resolve, reject)=>{
        fs.readFile('./02-ECMAScript概念解释.html', (err, data)=>{
            if (err) reject(err)
            resolve(data)
        })
    })
}

function read_3() {
    return new Promise((resolve, reject)=>{
        fs.readFile('./03-let.html', (err, data)=>{
            if (err) reject(err)
            resolve(data)
        })
    })
}

async function read() {
    let c_1 = await read_1()
    let c_2 = await read_2()
    let c_3 = await read_3()
    console.log(c_1.toString());
    console.log(c_2.toString());
    console.log(c_3.toString());
}

read()


