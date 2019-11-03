var submit = document.getElementById("signin_button");
var number = document.getElementById("inputNumber");
var cost = document.getElementById("inputCost");
var ul = document.getElementById("calcList");
var anlagenCounter = 1; 


//submit.addEventListener("click", calculateTotalCost);
submit.addEventListener("click", createListElement);


function calculateTotalCost(){
    var total = parseInt(cost.value)*parseInt(number.value); 
    //alert("Totalkosten sind "+total+"€.");
    createListElement(cost);
    
}

function createListElement() {
    console.log("Function called with "+parseInt(cost.value));
    var li = document.createElement("li");
    li.className = "list-group-item";
    let currentCost = cost.value*number.value;
    li.textContent = `Anlage ${anlagenCounter} kostet ${currentCost}€`;
    anlagenCounter++;
    ul.appendChild(li);
}


// Elements for Brutto Energieinhalt
var submit2 = document.getElementById("submit_energieinhalt");
var wirkungsgrad = document.getElementById("wirkungsgrad");
var ladedauer = document.getElementById("ladedauer");
var ladeleistung = document.getElementById("ladeleistung");
var ul1 = document.getElementById("energieinhaltList");
let berechnungsCounter = 1; 

const createEnergieinhaltElement = () =>  {
    var li = document.createElement("li");
    li.className = "list-group-item";
    let bruttoenergieinhalt = Math.round(wirkungsgrad.value*ladeleistung.value*(ladedauer.value/60));
    li.textContent = `In Energy Storage System Nr. ${berechnungsCounter} with an efficiency of ${wirkungsgrad.value}
    , storage duration of ${ladedauer.value} minutes and loading power of  ${ladeleistung.value}W the energy 
    stored amounts ${bruttoenergieinhalt} Wh`;
    berechnungsCounter++;
    ul1.appendChild(li);
    
    ladedauer.value = ""; 
    wirkungsgrad.value = "";
    ladeleistung.value = "";
    
}

submit2.addEventListener("click", createEnergieinhaltElement);



// Elements for Installation Analyzer

var submit3 = document.getElementById("submit_inst");
var submit4 = document.getElementById("submitDuration");
var instStorage = document.getElementById("instStorage");
var instMasse = document.getElementById("instMasse");
var instPrice = document.getElementById("instPrice");
var instDischarge = document.getElementById("instDischarge");
var ul2 = document.getElementById("installationList");
let berechnungsCounter2 = 1; 



const installations = [] ; 

// Class for Installations

class installation {
    constructor(storage, masse, price, discharge) {
        this.storage = storage;
        this.masse = masse;
        this.price = price;
        this.discharge = discharge; 
    }
    
    getStorage = () => {return this.storage}; 
    getMasse = () => {return this.masse}; 
    getPrice = () => {return this.price}; 
    getDischarge = () => {return this.discharge}; 
    
    summary = () => {
        return `Installation Specs: Storage ${this.getStorage()}MWh, 
        Mass ${this.getMasse()}kg, Price ${this.getPrice()}€ and a Discharge Rate of
        ${this.getDischarge()}% per hour`;
        
    }

}


/// Add Certain installation to installations array for further requests
const addInstallation = () => {
    
    installations.push(new installation(instStorage.value, instMasse.value, instPrice.value, instDischarge.value));
    console.log(installations[berechnungsCounter2-1].summary());
    return true; 
}


// Add Elements to List of Elements 

const createInstallation = () =>  {
    var li = document.createElement("li");
    li.className = "list-group-item";
    //let bruttoenergieinhalt = Math.round(wirkungsgrad.value*ladeleistung.value*(ladedauer.value/60));
    li.textContent = `Energy Storage System Nr. ${berechnungsCounter2} has a storage capacity
    of ${instStorage.value} MWh, a mass of ${instMasse.value}kg, a total price of ${instPrice.value}€ and a 
    self-discharing rate of ${instDischarge.value}% per hour.`;
    ul2.appendChild(li);
    
    addInstallation();
    berechnungsCounter2++; // Append Counter for Numeration of Installations
    
    
    instStorage.value = ""; 
    instMasse.value = "";
    instDischarge.value = "";
    instPrice.value = "";
    
}


const calculateLongest = () => {
    if(installations.length === 0) {
        alert ("Error: Installation list is empty. Please add installations.");
    }
    else{
    
    let currentLongest = 0; 
    let currentLongestInstallation = 0;
    let number = 0; 
    
    let longest = installations.map((installation, i) => {
        if(installation.getStorage()>=currentLongest){
            currentLongestInstallation = i; 
            currentLongest = installation.getStorage; 
            number = i+1; 
            //alert("This here is longer: "+installation.summary());
        }
        
     });
        
    alert("Installation "+number+" with specs "+installations[currentLongestInstallation].summary()+" has the longest duration.");
        
    }
    
}


submit3.addEventListener("click", createInstallation); // instantiate createInstallation Function
submit4.addEventListener("click", calculateLongest); // instantiate createInstallation Function

