let optgenerator = (digit) => {
    let num= '0123456789'
    let opt = ''
    for(let i =1;i<=digit;i++){
        opt += num[Math.floor(Math.random()*10)]
    }
    return opt

}
console.log(optgenerator(5))
