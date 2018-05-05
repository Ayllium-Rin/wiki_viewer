//Function to comb through API data: 
function searchResults(search) {
    fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        
//Varibles break up data into the different arrays provided by //the API:       
        let display = "<div>";  //The varible that will display the data.
        let resultsUrl = data[3];  //The URL to the entry.
        let resultsDesc = data[2];  //The description of the entry.
        let resultsTitle = data[1];  //The title of the entry.
        
//A for loop to iterate through the different arrays and display //the data.  The loop is defined by the length of the title //array, but all arrays are the same length:
        for (let i=0; i<resultsTitle.length; i++){
            display += `<h4 class='queryTitle'>${resultsTitle[i]}:</h4>`;
            display += `<a href="${resultsUrl[i]}" target='_blank' class='link'>${resultsDesc[i]}...Click for entry... </a>`;
        }
        display += "</div>"  //The closing tag to cap the div.
        
//The code to assign the contents of the dispay varible to the //display dive in the html:
        document.getElementById('displayResults').innerHTML = display;
    })
    searchInput.value = ""; //Clear the form when the query is submitted.
}

//Function to notify the user of an empty input:
function emptyBox(notification) {
    document.getElementById('instruct').innerHTML = notification;
    document.getElementById('displayResults').innerHTML = "";
}