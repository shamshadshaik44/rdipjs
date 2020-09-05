var result=0;
var lastopper="";
var num1=0;
var num2=0;
var carryover=false;
var carrynum=0;
var value=0;
function Num(num) { 
  if (carryover) {
    num2 =num;
    document.getElementById('showthevalue').value =num2;
    carryover = false;
  }
  else{
 document.getElementById('showthevalue').value+=num;
 num1=document.getElementById('showthevalue').value;
}
};
function clear()
{
  document.getElementById('showthevalue').value='0';
  num1=0;num2=0;
}
function opper(opp) { 
  document.getElementById('showthevalue').value=opp;
 lastopper = opp;
 carryover=true;
};
function equalto(){
if (num1 !== 0 && num2 !== 0) {
     if(lastopper==='+')
     {
        num1=add(num1,num2);
     }
     if(lastopper==='-')
     {
        num1=sub(num1,num2);
     }
     if(lastopper==='*')
     {
        num1=mul(num1,num2);
     }
     if(lastopper==='/')
     {
        num1=div(num1,num2);
     }
     if(lastopper==='%')
     {
        num1=percent(num1,num2);
     }
  }
  else if(num1!==0)
  {
    if(lastopper==='sqrt')
    {
      num1=sqrt(num1);
    }
    if(lastopper==='absl')
    {
      num1=absl(num1);
    }

  }
 carryover = true;
  
};
function add(a,b)
{
  result=parseFloat(a)+parseFloat(b);
  document.getElementById('showthevalue').value=result;
  return result;
};
function sub(a,b)
{
  result=parseFloat(a)-parseFloat(b);
  document.getElementById('showthevalue').value=result;
  return result;
};
function mul(a,b)
{
  result=parseFloat(a)*parseFloat(b);
  document.getElementById('showthevalue').value=result;
  return result;
};
function div(a,b)
{
  if(b==0)
  {
    alert("cant divide");
  }
  result=parseFloat(a)/parseFloat(b);
  document.getElementById('showthevalue').value=result;
  return result;
};
function percent(a,b) { 
   result=(parseFloat(a)/100)*(parseFloat(b));
   document.getElementById('showthevalue').value=result;
   return result;

}
function sqrt(a)
{
  value=Math.sqrt(parseFloat(a));
  if(value%1==0) //checking int or not
  {
    result=value;
 document.getElementById('showthevalue').value=result;
 return result;
  }
  else{
     result=value.toFixed(3);
     document.getElementById('showthevalue').value=result;
 return result;

  }
 
}
function absl(a)
{
  result=Math.abs(parseFloat(a));
  document.getElementById('showthevalue').value=result;
 return result;
}
                   //task  2 
function validatename(){
    var name = document.getElementById('name').value;
    if(!isNaN(name[0]) || name=="")             //checking the first number should not be a number
    {
      alert('Invalid name');
        document.getElementById('name').focus();
        return false;
    }
    else{
        return true;
    }
  };

function validateEmail() {
  var mailformat=document.getElementById('email').value;
  atpos = mailformat.indexOf("@");
  dotpos = mailformat.lastIndexOf(".");
  if (mailformat== "" ||atpos< 1 ||(dotpos-atpos < 2 ))
  {
 alert("Invalid email-id");
 document.getElementById('email').focus();
 return false;
  }else{
 return( true );
}
 };
function validatenum(){
  var number=document.getElementById('phone').value
  var phoneno=/^[0-9]+$/;
  if(number.match(phoneno) && number.length==10)    //numberlength should not exceed 10 digits
  {
   return true;
 }
 else{
  alert("Invalid phonnumber");
  document.getElementById('phone').focus();
  return false;
 }
};
               //task-3
           //palindrome
 function checkpalindrome(str1) {
     var len1 = string1.length;
     for (let i = 0; i < len1 / 2; i++) {
        if (string1[i] !== string1[len1 - 1 - i])
        {
            alert('given string is not a palindrome');
            return false;
        }
    }
    alert('given string is a palindrome');
    return true;
}
var string1 = prompt('Enter a string:');
var valuee = checkpalindrome(string1);
console.log(valuee);
                             //annagram
function checkAnnagram(str2, str3) {
     str2=str2.toLowerCase().replace(/ /g,'');
     str3=str3.toLowerCase().replace(/ /g,'');    //replacing all spaces in a string and converting into lower case letters
     if (str2.length !== str3.length) {
        return false;
    }
    
    var sortStr2 = str2.split('').sort().join('');
    var sortStr3 = str3.split('').sort().join('');
    return (sortStr2 === sortStr3);
}
var string2 = prompt('Enter frst string:');
 var string3 = prompt('Enter scnd string:');
 var value3=checkAnnagram(string2,string3);
 if(value3)
 {
  alert('given strings are annagrams');
 }
 else{
  alert('given strings are not annagrams');
 }
 console.log(value3);
                         //task4--game
 function random()
 {
  var x=document.getElementById("xvar");
  var y=document.getElementById("yvar");
  var res;
  x.innerHTML=Math.floor((Math.random()*1000)+1);
  y.innerHTML=Math.floor((Math.random()*1000)+1);
  x=x.innerHTML;
  y=y.innerHTML;
 res=find(x,y);                  //here's the final output of the code in console.log
 console.log(res);
 };
 function find(x,y)
 {
  let objects=new Map([[0,'human'],
      [1,'Cockroach'],
     [2, 'Nuclearbomb']]);
   x=x%10;                      //here we are getting last element that is one digit
   y=y%10;
     if(x>=3)                //if the above digit >=3 then %3 of that num produces repeated cycles of 0,1,2.. 
          x=x%3;                      //so for any random number it would produce only 3 unique key values
        if(y>=3)
        y=y%3;
      var strng1="";
      if(x===y)
      {
        return 'tie';
      }

      else if((x==0&&y==1)||(x==1)&&(y==0))
      {
        strng1=objects.get(0) +" "+"survives";     // when human and cockroach are there ,then human survies
        return strng1;
      }
      else if((x==1&&y==2)||(x==2)||(y==1))
      {
        strng1=objects.get(1) +" "+"survives";   //when cockroach and nueclear bomb are there ,then cockroach survives
        return strng1;
      }
      else if((x==0&&y==2)||(x==2)&&(y==0))
      {
        strng1=objects.get(0)+" "+"dies";    //when human and nuclear bomb are there, then human dies
        return strng1;
      }
      
 };                         
 