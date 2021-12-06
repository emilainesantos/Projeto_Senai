var numero  = 1;
for (var i=0; i<=10; i++){
console.log (`${numero} x ${i} = ${numero * i}`);
if (i == 10 && numero <10){
    i = 0;
    numero +=1;
}
}


/*for (var i= 1; i<=10; i++){
    var row = "10 *" + i + "="+ 10*i;
    console.log(row); 
}
*/