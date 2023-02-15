
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
