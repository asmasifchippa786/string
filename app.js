var input1 = prompt('Enter Your First Name (Write in one Word)');

var input2 = prompt('Enter Your Seconde Name (Write in one Word)');

document.write('<h1>String Methode</h1><hr>');

document.write('<h1>Welcome ' + input1 + ' ' + input2 + '</h1><hr>');

var input3 = prompt('Enter Your Mobile Name with Mobile Model');

document.write('<h1>Your fovorite Phone Is: ' + input3 + '</h1>');

document.write('<h1> Lenght Of String: ' + input3.length + '<h1><hr>');

var cityName = 'Pakistani';

document.write('<h1>String: ' + cityName + '</h1>');

document.write("<h1>Index Of 'n': " + cityName.indexOf('n') + '</h1><hr>');

var text = 'Hello World';

document.write('<h1>String: ' + text + '</h1>');

document.write("<h1>Last Index Of 'l': " + text.lastIndexOf('l') + '</h1>');

var cityName1 = 'Pakistan';

document.write('<h1>String: ' + cityName1 + '</h1>');

document.write('<h1>Character at Index 3: ' + cityName1.slice(3,4) + '</h1><hr>');

document.write('<h1>Concat() Methode</h1>');

var concat = input1.concat(' ' , input2)

document.write('<h1>Welcome ' + concat +'</h1><hr>');

var city = 'Hyderabad';

document.write('<h1>City: ' + city + '</h1>');

var replace = city.replace('Hyder' , 'Islam');

document.write('<h1>After Replacement: ' + replace + '</h1><hr>');

var  message = 'Ali and Sami Are Best Friends. They Play Cricket and Football Together.';

document.write('<h1>Message: ' + message + '</h1>');

 for (var i = 0; i < message.length; i++) {
     if (message.slice(i , i + 4) === "and") {
     message = message.slice(0 , i) + "&" + message.slice(i + 4);
    }
}

document.write('<h1>After Replacemnet: ' + message + '</h1><hr>')

var strings = '472';

var number = 472;

document.write('<h1>Value: ' + strings + '</h1>');

document.write('<h1>Type: ' + typeof strings + '</h1>')

document.write('<h1>Value: ' + number + '</h1>');

document.write('<h1>Type: ' + typeof number + '</h1><hr>')

var input4 = prompt('Enter URL of Any website(Please Write In Small Case and Also Type www');

document.write('<h1>URL: ' + input4 + '</h1>');

var remove = input4.replace('www.' , '');

document.write('<h1>Domain: ' +  remove + '</h1><hr>');

var input5 = prompt('Enter Any Name , Thing and Place (in Lower case)');

document.write('<h1>User Input: ' + input5 + '</h1>') 

document.write('<h1>Upper Case: ' + input5.toUpperCase() + '</h1><hr>')

var input6 = prompt('Enter Any Name , Thing and Place (in Upper case)');

document.write('<h1>User Input: ' + input6 + '</h1>')

document.write('<h1>Lower Case: ' + input6.toLowerCase() + '</h1><hr>')

var input7 = prompt('Enter Any Name , Thing and Place (in Lower case or Upper Case)');

document.write('<h1>User Input: ' + input7 + '</h1>')

document.write('<h1>Sentence Case: ' + input7[0].toUpperCase() + input7.slice(1) + '</h1><hr>');

var num = '35.36';

var replace = num.replace('.' , '')

document.write('<h1>Number: ' + num + '</h1>')


document.write('<h1>Result: ' + replace + '</h1><hr>')

var a = '3';

var b = ' 3';

var x = a+b ;

document.write('<h1>a Is ' + a + '</h1>')

document.write('<h1>b Is ' + b + '</h1>')

document.write('<h1>a+b Is ' + x + '</h1>')

var y = a-b;

document.write('<h1>a-b Is ' + y + '</h1><hr>');

var input8 = prompt('Enter Your username');

for (var i=0 ; i<input8.length ; i++){
    if(input8[i]==='@' || input8[i]===',' || input8[i]==='.' || input8[i]==='!'){
        alert('Please enter a Valid UserName')
    }
}
document.write('<h1>Username: ' + input8 + '</h1><hr>');

var input9 = prompt('Enter Your Password')

var number1 = [1 ,2 , 3, 4, 5 ,6 ,7 ,8 , 9, 0]

document.write('<h1>Password: ' + input9 + '</h1>')

for(var i=0 ; i<input9.length ; i++){
    if(input9[0]==number1[i]){
        document.write('<h1>Password can not be begin with number</h1><h1>Invaliad Password</h1>')
    }
    if(input9.length-1>6){
        document.write('<h1>Password Also Contain 6 Letter</h1>')
    }
}

document.write('<hr>');

var university = 'University of Karachi';

for (var i=0 ; i<university.length ; i++){
    document.write('<h1>' + university[i] + '</h1>');
}

document.write('<hr>');

var input10 = prompt('Enter Any Name');

document.write('<h1>Input: ' + input10 + '</h1>');

document.write('<h1>Last Index: ' + input10[input10.length-1]+ '</h1><hr>');

var textr = 'The quick brown fox jumps over the lazy dog';

document.write('<h1>Text: ' + textr + '</h1>');



for (var i = 0; i < textr.length; i++) {
    if (textr.slice(i , i + 4) === "the") {
       var sum = i+1
       console.log(sum)
   }
}
