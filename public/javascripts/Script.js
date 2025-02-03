//Malory Morey
//CS341 HW03 javascript file with code from HTML file

//MyFunction is the function for the notes alert if someone writes vegan
function myFunction() {
    //get the document and check if it includes the word vegan
    if (document.getElementById("notes").value.includes("vegan")) {
        //Give alert with warning message
        alert("Warning! All cheesecakes offered contain dairy. ");
    }

  }