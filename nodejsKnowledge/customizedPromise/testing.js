const mp = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("SAVED")
    }, 1000)
})

mp.then((r)=>{
    console.log(`result: ${r}`);
})