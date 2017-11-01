const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function theBeatlesPlay(arrSingers,arrInstru)
{

}
function johnLennonFacts(arrFact)
{
  var i=0;
  while(arrFact.length>0)
  {
      arrFact[i]+="!!!";
      i++;
  }

  return arrFact;
};
function iLoveTheBeatles(num)
{
  var msg=[];
  do{
      msg="I love the Beatles!";
      num++;
  }while(num<=15);
}
