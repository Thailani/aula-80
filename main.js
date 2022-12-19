nameOfTheStudentArray = [];

function submit()
{
    var displayStudentArray = []

    for (var j = 1; j<= 4; j++)
    {
        var nameOfTheStudentArray = document.getElementById("nameOfTheStudent"+j).value;
        console.log(nameOfTheStudentArray);
        nameOfTheStudentArray.push(nameOfTheStudentArray);
    }

    console.logO(nameOfTheStudentArray);

    var lenghtOfNameOfTheStudentArray = nameOfTheStudentArray; k++;
    console.log(lenghtOfNameOfTheStudentArray);

    for (var k = 0; k < lenghtOfNameOfTheStudentArray; k++)
    {
        displayStudentArray.push("<h4>NAME -"+ nameOfTheStudentArray[k] + "</h4>")
        console.log(displayStudentArray);
    }

    console.log(displayStudentArray);
    document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

    var removeCommas = displayStudentArray.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML = renoveCommas;

    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";

}

function sorting() 
 {
     nameOfTheStudentArray.sort();
     console.log(nameOfTheStudentArray);

     var displayStudentArraySorting = [];

     var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length; 
     console.log(lenghtOfNameOfStudentsArray);

      for (var k = 0; k < lenghtOfNameOfStudentsArray; k++) 
       {
             displayStudentArraySorting.push("NAME- " + nameOfTheStudentArray[k] + "</h4>"); 
             console.log(displayStudentArraySorting);
       }

    var removeCommas = displayStudentArraySorting.join(" ");
    console.log(removeCommas);

    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
 }  
