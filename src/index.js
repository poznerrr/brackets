module.exports = function check(str, bracketsConfig) {
  if(str.length%2!=0){
    return false;
  }
  let arr=str.split('');
  let flag=1;
  while(arr.length>0 && flag==1){
    flag=0;
   for (let i=0; i<arr.length-1; i++){
     let pre=arr[i];
     let post;
      for(let miniarr of bracketsConfig){
        if (pre==miniarr[0])
        {
          post=miniarr[1];
        }
      }
    if (arr[i+1]==post){
      arr.splice(i,2);
      flag=1;
      break;
    }
   }
   if (flag==0){
     return false;
    }
  }
  return true;
}