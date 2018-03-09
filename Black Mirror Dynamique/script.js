


function datacharged(){
    var data = JSON.parse(xhr.responseText);
    console.log("JSON charged succesfully")
    console.log(data.project[0].name)

};

xhr = new XMLHttpRequest()
xhr.open("GET", "datafile.json")
xhr.send()
xhr.addEventListener("load", datacharged);