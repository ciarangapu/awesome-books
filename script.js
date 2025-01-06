
function addTask() {
  
    const title = document.getElementById('add').value;
    const author = document.getElementById('mora').value;

   
    if (title === "" || author === "") {
        alert("Please fill in both Title and Author fields.");
        return;
    }

   
    const AddTitle = document.createElement("li");
    AddTitle.innerHTML = `${title} by ${author}`;

   
    document.getElementById('List').appendChild(AddTitle);

   
    document.getElementById('add').value = '';
    document.getElementById('mora').value = '';
}


// display date and time //

document.addEventListener('DOMContentLoaded', function() {
   
    var now = new Date();
   
   
var formattedDateTime = now.toLocaleString();
    
   
    document.getElementById("dateTime").textContent = formattedDateTime;
});
    






