module.exports = function reverse (n) {
    n = Math.abs(n);
  let reverseNum = "";
  while(n > 0){
      reverseNum += n % 10;
      n = Math.floor(n / 10); 
  }
  return Number(reverseNum);
}
