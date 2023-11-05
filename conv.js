function cal(){
    let x = Number(document.getElementById("inpt").value);
    let sum =0;
    if (x==0 || x==null || x==""){
      sum="Enter valid value";
    }
    else if(x>=7){
      sum=(7.4*x)+12;
      sum=sum.toFixed(2)+" %";
    }
    else if(x<7){
      sum=(7.1*x)+12;
      sum=sum.toFixed(2)+" %";
    }
    document.getElementById("disp").innerHTML=sum;
  }