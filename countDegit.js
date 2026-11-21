function countDegit(n){
    if(n==0) return  1;
  let count = 0;
  n=Math.abs(n)
    while (n>0){
        n=Math.floor(n/10)
        count ++
    }
    return count
}
let result = countDegit(-885)
console.log(result)