// document.write("RESULT : <br> ")
// document.write("<br> ")
// document.write("<br> ")

// var a = 10;


// document.write(`the valua of a  is : ${a} <br>`)


// document.write("--------------------------------------<br> ")


// document.write(`the valua of ++a  is : ${a} <br>`)

// document.write("<br> ")
// document.write("<br> ")

//  var a = ++a ;

// document .write(`now the value of a is : ${a} <br>`)


// document.write("--------------------------------------<br> ")



// document.write(`the valua of a++  is : ${a} <br>`)

// var na = a++ ;

// document.write(`now the valua of a  is : ${a} <br>`)


// document.write("--------------------------------------<br> ")
// document.write("<br> ")
// document.write("<br> ")



// document.write(`the valua of --a  is : ${a} <br>`)

// document.write("<br> ")
// document.write("<br> ")

// var wew = --a ;

// document .write(`now the value of a is : ${wew} <br>`)


// document.write("--------------------------------------<br> ")


// document .write(`now the value of a-- is : ${a} <br>`)

// document.write("<br> ")
// document.write("<br> ")

//  ab = a-- ;

// document .write(`now the value of a is : ${a} <br>`)

// document.write("--------------------------------------<br> ")


// //-----------question number two ===========
// '-----------"question number two" ======='

// document.write("<br> ")
// document.write("<br> ")
// var a = 2 ; b = 1 ;

// document.write("<br> ")
// document.write("<br> ")
// document.write( `now a is equal to ${a}`)
// document.write("<br> ")
// document.write("<br> ")
// document.write( `now b is equal to ${b}`)
// document.write("<br> ")
// document.write("<br> ")

// var result = --a ;

// document.write("<br> ")
// document.write("<br> ")
// document.write(`the result of --a = ${result}`)

// var result = --a - --b;

// document.write("<br> ")
// document.write("<br> ")
// document.write(`the result of --a - --b = ${result}`)


// document.write("<br> ")
// document.write("<br> ")

// document.write(`the result of --a - --b + ++b = ${result}`) 


// document.write("<br> ")
// document.write("<br> ")
// var result = --a - --b + ++b + b--;

// document.write("<br> ")
// document.write("<br> ")

// document.write(`the result of --a - --b + ++b + b--= ${result}`)  



// //----------question number three-------


// var name = (prompt("what is your name ?" ))

// alert(` ASSALAM O ALIKUM \n ${name} ! \n wellcome to our web UI \n you  should know about java script.`)


//---------------question number four ----------

// =---------------table as user or by default ----------




// var table = (+prompt(`which table do you want to see ?`))

//  var defualt =  5 ;


//  if(table <= 0 ){


// document.write(` it is the table of ${defualt} <br>`)


// document.write(`${defualt}  x 1 = ${defualt * 1} <br>`)


// document.write(`${defualt}  x 2 = ${defualt * 2} <br>`)


// document.write(`${defualt}  x  3 = ${defualt * 3} <br>`)


// document.write(`${defualt}  x 4 = ${defualt * 4} <br>`)


// document.write(`${defualt}  x 5 = ${defualt * 5} <br>`)


// document.write(`${defualt}  x 6 = ${defualt * 6} <br>`)


// document.write(`${defualt}  x 7 = ${defualt * 7} <br>`)


// document.write(`${defualt}  x 8 = ${defualt * 8} <br>`)


// document.write(`${defualt}  x 9 = ${defualt * 9} <br>`)


// document.write(`${defualt}  x 10 = ${defualt * 10} <br>`)



//  }
// else{

//     document.write(` it is the table of ${table} <br>`)


// document.write(`${table}  x 1 = ${table * 1} <br>`)


// document.write(`${table}  x 2 = ${table * 2} <br>`)


// document.write(`${table}  x 3 = ${table * 3} <br>`)


// document.write(`${table}  x 4 = ${table * 4} <br>`)


// document.write(`${table}  x 5 = ${table * 5} <br>`)


// document.write(`${table}  x 6 = ${table * 6} <br>`)


// document.write(`${table}  x 7 = ${table * 7} <br>`)


// document.write(`${table}  x 8 = ${table * 8} <br>`)


// document.write(`${table}  x 9 = ${table * 9} <br>`)


// document.write(`${table}  x 10 = ${table * 10} <br>`)
// }


//---------------question number five ------------

//---------mark sheet and percentage-------


var subjectnoOne = (prompt("tell me your first subject name? "))
document.write(" <br>")


var marksNoOne = Number(prompt("tell me your first subject marks out of 100? "))
document.write(" <br>")


var subjectnoTwo = (prompt("tell me your second subject name? "))
document.write(" <br>")



var marksNoTwo = Number(prompt("tell me your second subject marks out of 100 ? "))
document.write(" <br>")


var subjectnothree = (prompt("tell me your Third subject name ? "))
document.write(" <br>")



var marksNoOthree = Number(prompt("tell me your third subject marks out of 100? "))
document.write(" <br>")


//  document.write(" <br>")
//  document.write(" <br>")
//  document.write(" <br>")
var sub_1 = subjectnoOne;
//  document.write(" <br>")
var sub_2 = subjectnoTwo;
//  document.write(" <br>")
var sub_3 = subjectnothree;
//  document.write(" <br>")
var M1 = marksNoOne
//  document.write(" <br>")
var M2 = marksNoTwo;
//  document.write(" <br>")
var M3 = marksNoOthree;
//  document.write(" <br>")
var Totalmarks = 100;
//  document.write(" <br>")
//  document.write(" <br>")
// var totalOfTotal = 300 ;
var TotalOFObtained = M1 + M2 + M3;
var TotalmarkAll = Totalmarks * 3;
var S1Percentage = M1 / Totalmarks * 100;
var S2Percentage = M2 / Totalmarks * 100;
var S3Percentage = M3 / Totalmarks * 100;
var percenageOfAll = TotalOFObtained / TotalmarkAll * 100;
document.write(` 
<style>
body{
    background-color: rosybrown ;

}

#main{

    witdh: 100vw;
    height: 1100px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: rosybrown ;
    position: relative;
    top: -150px;
    font-size: 2rem;

}

tr{
    margin: 80px;
    border:1.5px solid black;
    text-align:center;
    
}
th{
    color: whitesmoke;
    margin: 50px;
    border:3px solid black;
    text-align:center;
    
}
td{
    color: white;
    margin: 50px;
    border:2px solid black;
    text-align:center;
    
}
table{
    border:4px solid black;
    width: 1100px;
    height: 500px;
    // text-align:center;

}
</style>
    <div id ="main"> 
    <table>
        <tr>
        <th>Subject :</th>
            <th>Total Marks :</th>
            <th>Obtained Marks :</th>
            <th>Percentage :</th>
        </tr>
        <tr>
            <th>${sub_1} </th>
            <td>${Totalmarks}</td>
            <td>${M1}</td>
            <td>${S1Percentage}%</td>
        </tr>
        <tr>
            <th>${sub_2}</th>
            <td>${Totalmarks}</td>
            <td>${M2}</td>
            <td>${S2Percentage}%</td>
        </tr>
        <tr>
        <th>${sub_3}</th>
            <td>${Totalmarks}</td>
            <td>${M3}</td>
            <td>${S3Percentage}%</td>
            </tr>
            <tr>
            <th colspan="1">Total</th>
            <td> ${TotalmarkAll}</td>
            <td>${TotalOFObtained}</td>
            <td>${percenageOfAll}%</td>
            </tr>
            
            </table> 
    
    </div>
            `
)
