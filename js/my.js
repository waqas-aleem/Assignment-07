   //1. Write a js program to find maximum between two numbers.

   function checkMaximumNumber() {
   
    var number1 = document.getElementById("firstNumber").value;
    var number2 = document.getElementById("secondNumber").value;

    if (parseInt(number1)>=parseInt(number2)) 
    {
        document.getElementById("result").innerHTML =  `Maximum Number is : ${number1}`   ;
    } 
    else  
    {
        document.getElementById("result").innerHTML = `Maximum Number is : ${number2}`;    
    }
     
        
   }
   
    //2. Write a js program to find maximum between three numbers.

    function checkMaximumNumber2() {
   
        var number1 = document.getElementById("firstNumber1").value;
        var number2 = document.getElementById("secondNumber1").value;
        var number3 = document.getElementById("thirdNumber1").value;
    
        if (parseInt(number1)>=parseInt(number2) && parseInt(number1)>=parseInt(number3)) {

            document.getElementById("result1").innerHTML =  `Maximum Number is : ${number3}`;  

        } 
        else  if (parseInt(number2)>=parseInt(number1) && parseInt(number2)>=parseInt(number3)) {
            document.getElementById("result1").innerHTML =  `Maximum Number is : ${number2}`;
        }
        else
        {
            document.getElementById("result1").innerHTML = `Maximum Number is : ${number3}`;    
        }
         
            
       }
       //3. Write a js program to check whether a number is negative, positive or zero.
   
       function checkNumbercondition() {

        var number1 = document.getElementById("inputcheck").value;
        if (parseInt(number1)<0) {

            document.getElementById("result2").innerHTML = "Number is Negative";    
        }
        else if (parseInt(number1)>0) {
            document.getElementById("result2").innerHTML = "Number is Positive";    
        }
        else {
            document.getElementById("result2").innerHTML = "Number is Zero";    
        }
      
    
         
            
       }
   
       //4. Write a js program to check whether a number is divisible by 5 and 11 or not.
  


       function checkNumberdivisble() {

        var number1 = document.getElementById("divisblecheck").value;
        if (parseInt(number1)%5==0) {

            document.getElementById("result3").innerHTML = "Number is divisible by 5";    
        }
        else if (parseInt(number1)%11==0) {
            document.getElementById("result3").innerHTML = "Number is divisible by 11";    
        }
        else {
            document.getElementById("result3").innerHTML = "Number is not divisible by 5 or 11";    
        }
      
    
         
            
       }
       //5. Write a js program to check whether a number is even or odd.

       function checkNumberOddEven() {

        var number1 = document.getElementById("checkevenodd").value;
        if (parseInt(number1)%2==0) {

            document.getElementById("result4").innerHTML = "Number is Even";    
        }
        else  {
            document.getElementById("result4").innerHTML = "Number is Odd";    
        }
            
       }

       //6. Write a js program to check whether a year is leap year or not.

       function checkLeapYear() {

        var inputYear = document.getElementById("checkyear").value;
    

        if ((inputYear%4===0) && (inputYear%100!==0) || (inputYear%400==0) ) {

            document.getElementById("result5").innerHTML = "Year is a Leap year";    
        }
        else  {
            document.getElementById("result5").innerHTML = "Year is not a Leap year";    
        }
            
       }
    //7. Write a js program to check whether a character is alphabet or not.
    function checkAlphabet() {

        var inputCheck = document.getElementById("checkAlpha").value;
    

        if ( (inputCheck)>='A'  &&  (inputCheck)<='Z' || (inputCheck)>='a'  &&  (inputCheck)<='z' ) 
        {
            document.getElementById("result6").innerHTML = "Value is a Alphabet "; 
        }
        else
        {
            document.getElementById("result6").innerHTML = "Value is not a Alphabet "; 
        }
    }

    //8. Write a js program to input any alphabet and check whether it is vowel or consonant.

    function checkVowelConsoent() {

        var inputCheck = document.getElementById("checkVowel").value;
    

        if ( inputCheck==='a'||inputCheck==='A'||inputCheck==='e'||inputCheck==='E'||inputCheck==='i'||inputCheck==='I'||inputCheck==='o'||inputCheck==='O'||inputCheck==='u'||inputCheck==='U') 
        {
            document.getElementById("result7").innerHTML = "Value is Vowel "; 
        }
        else
        {
            document.getElementById("result7").innerHTML = "Value is Consonant "; 
        }
    }

    //9. Write a js program to input any character and check whether it is alphabet, digit or special character.

    function checkInputValue() {

        var inputCheck = document.getElementById("checkvalue").value;
    
        
        if ( parseInt(inputCheck)>0||parseInt(inputCheck)<0 ||typeof(inputCheck) == 'number' ) {
            document.getElementById("result8").innerHTML = "Value is Digit "; 
        }
        else if ((inputCheck)>='A'  &&  (inputCheck)<='Z'  || (inputCheck)>='a'  &&  (inputCheck)<='z' )  {
            document.getElementById("result8").innerHTML = "Value is Alphabet "; 
        }
         
        else
        {
            document.getElementById("result8").innerHTML = "Value is Special Character "; 
        }
    }

    //10. Write a js program to check whether a character is uppercase or lowercase alphabet.

    function checkInputUpperLower() {

        var inputCheck = document.getElementById("charInput").value;
         

        if (inputCheck == inputCheck.toUpperCase() && isNaN(inputCheck) ) {
            document.getElementById("result9").innerHTML = "Character is in UpperCase"; 
        }
        
        else if (inputCheck == inputCheck.toLowerCase() &&  isNaN(inputCheck)) {
            document.getElementById("result9").innerHTML = "Character is in LowerCase"; 
        }
        else
        {
            document.getElementById("result9").innerHTML = "Character is in Captial"; 
        }
    }
   



    
         //11. Write a js program to input week number and print week day.
    
        //  currentdate = new Date();
        //  var oneJan = new Date(currentdate.getFullYear(),0,1);
        //  var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
        //  var result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
        //  console.log(`The week number of the current date (${currentdate}) is ${result}.`);
       




     //12. Write a js program to input month number and print number of days in that month.
           
     function checkDay(inputcheck) {
       
  
        var inputcheck = document.getElementById("checkMonthDay").value;

         var inputcheck1 =  new Date(inputcheck); 
         var year = inputcheck1.getFullYear();
         var mon = inputcheck1.getMonth();
         var days = new Date(year,mon+1,0).getDate();

        // mon+1 means to pick current month 0 means previous month last date

        document.getElementById("result11").innerHTML =  `Days in this Month : ${days}` ;  
           
         }
         
         





     //15. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:

     function salaryCheck(checkInput) {

        var checkInput = document.getElementById("inputSalary").value;
         
        if (parseInt(checkInput) <= 10000) 
        {
             
      var ha = parseInt(checkInput)*0.25 ;
      var da = parseInt(checkInput)*0.80 ;


      document.getElementById("result14").innerHTML =  `Gross Salary : ${ (parseInt(checkInput)+ ha+da)}`;
            
        }

        else if (parseInt(checkInput) > 10000 && parseInt(checkInput)<=20000) {
            
            var ha = parseInt(checkInput)*0.25 ;
            var da = parseInt(checkInput)*0.90 ;


            document.getElementById("result14").innerHTML =  `Gross Salary : ${ (parseInt(checkInput)+ ha+da)}`;
           
        }


        else if (parseInt(checkInput) > 20000  ) {
            
            var ha = parseInt(checkInput)*0.30 ;
            var da = parseInt(checkInput)*0.95 ;


            document.getElementById("result14").innerHTML = "Gross Salary : " + (parseInt(checkInput)+ ha+da); 
           
        }


     }

     //16. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
     function electricityBill(checkInput) {

        var checkInput = document.getElementById("inputUnit").value;
         
        if (parseInt(checkInput) <= 50) 
        {
             
      var bill = parseInt(checkInput)*0.50 ;
      var totalbill= parseInt(bill) + parseInt(bill*0.20);

      document.getElementById("result15").innerHTML =   `Electricity Bill is : ${totalbill}`  ; 
        }

        else if (parseInt(checkInput) > 50 && parseInt(checkInput)<=150 ) 
        {
             
      var bill = parseInt(checkInput)*0.75 ;
      var totalbill= parseInt(bill) + parseInt(bill*0.20);

      document.getElementById("result15").innerHTML =   `Electricity Bill is : ${totalbill}`  ; 
            
        }


        else if (parseInt(checkInput) > 150 && parseInt(checkInput)<=250 ) 
        {
             
      var bill = parseInt(checkInput)*1.20 ;
      var totalbill= parseInt(bill) + parseInt(bill*0.20);

      document.getElementById("result15").innerHTML =   `Electricity Bill is : ${totalbill}`  ; 
            
        }

     else {

        var bill = parseInt(checkInput)*1.50 ;
        var totalbill= parseInt(bill) + parseInt(bill*0.20);
  
              document.getElementById("result15").innerHTML =   `Electricity Bill is : ${totalbill}`  ; 
     }


     }