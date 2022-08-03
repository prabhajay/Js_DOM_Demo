const foot=(a,b,c)=>{
    const sum=a+b+c
    const product=a*b*c
    return product
}
console.log(foot(1,2,3))
const foot1=(a,b,c)=>{
    for(let i=0; i<3;i++){
        if(i===0) 
        {
            console.log('exit')
        }
    }
    console.log('we just broke')
}
foot1()

const sum = (a, b) => {
   /* if ((a !== 0 && !a) || (b !== 0 && !b)) throw new TypeError('Invalid Arg.')  */
    return a + b
    
  }
  console.log(sum(3,4))
  console.log(sum(1))