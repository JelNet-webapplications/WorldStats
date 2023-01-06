let births = 0;
let deaths = 0;
let covid = 0;
let trees = 0;
let carbondioxide = 0;
let google = 0;
let ytmins = 0;
let ythours = 0;
setInterval(birthFunction,225.080);
setInterval(deathFunction,539.957);
setInterval(populationFunction,500);
setInterval(covidFunction,224.0372);
setInterval(treesFunction,9.010);
setInterval(carbondioxideFunction,10.014);
setInterval(googleFunction,15.87);
setInterval(ytminsFunction,8.3);

function birthFunction() {
    document.getElementById("birthHeader").innerHTML = births
    births++
}
function deathFunction() {
    document.getElementById("deathsHeader").innerHTML = deaths
    deaths++
}
function populationFunction() {
    document.getElementById("populationHeader").innerHTML = births-deaths
}
function covidFunction() {
    document.getElementById("covidHeader").innerHTML = covid + " cases"
    covid++
}
function treesFunction() {
    document.getElementById("treesHeader").innerHTML = trees + " trees"
    trees++
}
function carbondioxideFunction() {
    document.getElementById("carbondioxideHeader").innerHTML = carbondioxide + " metric tons"
    carbondioxide+=10
}
function googleFunction() {
    document.getElementById("googleHeader").innerHTML = google + " searches"
    google+=950+Math.floor((Math.random() * 200)-100)
}
function ytminsFunction() {
    document.getElementById("ytminsHeader").innerHTML = ythours.toFixed(0) + " hours " + ytmins%60 + " minutes of footage"
    ythours = (ytmins-30)/60
    ytmins++
}


//Test for X/second
let timer = 0
setInterval(GooglepS,10)
function GooglepS() {
    timer+=10
}