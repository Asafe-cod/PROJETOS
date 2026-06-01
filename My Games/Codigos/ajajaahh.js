const fibonacci=(x)=> {
    if(x==0||xx==1)
        return 1;
    let fm1=1, fm2=1, fm;
    for(let i=2; i<=x; i++){
        fm=fm1+fm2;
        fm2=fm1;
        fm1=fm;
    }
    return fm;
}
const fiboRec =(x)=>{
    return (x==0||x==1)?1:(fiboRec(x-1)+fiboRec(x-2));
}
let somaTotal = 0;
const qtdeInteracoes = 50;
for(let i = qtdeInteracoes; i >= 1; i-- ) {
     somaTotal += i; // equivalente a utilizar somaTotal = somaTotal + i
}
console.log('soma total:',somaTotal);