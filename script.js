var statusScout = document.getElementById("hiddenScout");
var statusSoldier = document.getElementById("hiddenSoldier");
var statusPyro = document.getElementById("hiddenPyro");
var statusDemoman = document.getElementById("hiddenDemoman");
var statusHeavy = document.getElementById("hiddenHeavy");
var statusEngineer = document.getElementById("hiddenEngineer");
var statusMedic = document.getElementById("hiddenMedic");
var statusSniper = document.getElementById("hiddenSniper");
var statusSpy = document.getElementById("hiddenSpy");
var buttonScout = document.getElementById("buttonScout");
var buttonSoldier = document.getElementById("buttonSoldier");
var buttonPyro = document.getElementById("buttonPyro");
var buttonDemoman = document.getElementById("buttonDemoman");
var buttonHeavy = document.getElementById("buttonHeavy");
var buttonEngineer = document.getElementById("buttonEngineer");
var buttonMedic = document.getElementById("buttonMedic");
var buttonSniper = document.getElementById("buttonSniper");
var buttonSpy = document.getElementById("buttonSpy");

function disableButtons() {
    var statusScout = document.getElementById("hiddenScout");
    var statusSoldier = document.getElementById("hiddenSoldier");
    var statusPyro = document.getElementById("hiddenPyro");
    var statusDemoman = document.getElementById("hiddenDemoman");
    var statusHeavy = document.getElementById("hiddenHeavy");
    var statusEngineer = document.getElementById("hiddenEngineer");
    var statusMedic = document.getElementById("hiddenMedic");
    var statusSniper = document.getElementById("hiddenSniper");
    var statusSpy = document.getElementById("hiddenSpy");
    var buttonScout = document.getElementById("buttonScout");
    var buttonSoldier = document.getElementById("buttonSoldier");
    var buttonPyro = document.getElementById("buttonPyro");
    var buttonDemoman = document.getElementById("buttonDemoman");
    var buttonHeavy = document.getElementById("buttonHeavy");
    var buttonEngineer = document.getElementById("buttonEngineer");
    var buttonMedic = document.getElementById("buttonMedic");
    var buttonSniper = document.getElementById("buttonSniper");
    var buttonSpy = document.getElementById("buttonSpy");
    statusScout.style.display = "none";
    statusSoldier.style.display = "none";
    statusPyro.style.display = "none";
    statusDemoman.style.display = "none";
    statusHeavy.style.display = "none";
    statusEngineer.style.display = "none";
    statusMedic.style.display = "none";
    statusSniper.style.display = "none";
    statusSpy.style.display = "none";
    buttonScout.style.border = "0";
    buttonSoldier.style.border = "0";
    buttonPyro.style.border = "0";
    buttonDemoman.style.border = "0";
    buttonHeavy.style.border = "0";
    buttonEngineer.style.border = "0";
    buttonMedic.style.border = "0";
    buttonSniper.style.border = "0";
    buttonSpy.style.border = "0";
}

function hideTextScout() {
    var statusScout = document.getElementById("hiddenScout");
    var buttonScout = document.getElementById("buttonScout");
    if (statusScout.style.display === "none") {
        disableButtons();
        statusScout.style.display = "block";
        buttonScout.style.border = "#EEEEEE 3px solid"
    } else {
        statusScout.style.display = "none";
        buttonScout.style.border = "0"
    }
}

function hideTextSoldier() {
    var statusSoldier = document.getElementById("hiddenSoldier");
    var buttonSoldier = document.getElementById("buttonSoldier");
    if (statusSoldier.style.display === "none") {
        disableButtons();
        statusSoldier.style.display = "block";
        buttonSoldier.style.border = "#EEEEEE 3px solid"
    } else {
        statusSoldier.style.display = "none";
        buttonSoldier.style.border = "0"
    }
}

function hideTextPyro() {
    var statusPyro = document.getElementById("hiddenPyro");
    var buttonPyro = document.getElementById("buttonPyro");
    if (statusPyro.style.display === "none") {
        disableButtons();
        statusPyro.style.display = "block";
        buttonPyro.style.border = "#EEEEEE 3px solid"
    } else {
        statusPyro.style.display = "none";
        buttonPyro.style.border = "0"
    }
}

function hideTextDemoman() {
    var statusDemoman = document.getElementById("hiddenDemoman");
    var buttonDemoman = document.getElementById("buttonDemoman");
    if (statusDemoman.style.display === "none") {
        disableButtons();
        statusDemoman.style.display = "block";
        buttonDemoman.style.border = "#EEEEEE 3px solid"
    } else {
        statusDemoman.style.display = "none";
        buttonDemoman.style.border = "0"
    }
}

function hideTextHeavy() {
    var statusHeavy = document.getElementById("hiddenHeavy");
    var buttonHeavy = document.getElementById("buttonHeavy");
    if (statusHeavy.style.display === "none") {
        disableButtons();
        statusHeavy.style.display = "block";
        buttonHeavy.style.border = "#EEEEEE 3px solid"
    } else {
        statusHeavy.style.display = "none";
        buttonHeavy.style.border = "0"
    }
}

function hideTextEngineer() {
    var statusEngineer = document.getElementById("hiddenEngineer");
    var buttonEngineer = document.getElementById("buttonEngineer");
    if (statusEngineer.style.display === "none") {
        disableButtons();
        statusEngineer.style.display = "block";
        buttonEngineer.style.border = "#EEEEEE 3px solid"
    } else {
        statusEngineer.style.display = "none";
        buttonEngineer.style.border = "0"
    }
}

function hideTextMedic() {
    var statusMedic = document.getElementById("hiddenMedic");
    var buttonMedic = document.getElementById("buttonMedic");
    if (statusMedic.style.display === "none") {
        disableButtons();
        statusMedic.style.display = "block";
        buttonMedic.style.border = "#EEEEEE 3px solid"
    } else {
        statusMedic.style.display = "none";
        buttonMedic.style.border = "0"
    }
}

function hideTextSniper() {
    var statusSniper = document.getElementById("hiddenSniper");
    var buttonSniper = document.getElementById("buttonSniper");
    if (statusSniper.style.display === "none") {
        disableButtons();
        statusSniper.style.display = "block";
        buttonSniper.style.border = "#EEEEEE 3px solid"
    } else {
        statusSniper.style.display = "none";
        buttonSniper.style.border = "0"
    }
}

function hideTextSpy() {
    var statusSpy = document.getElementById("hiddenSpy");
    var buttonSpy = document.getElementById("buttonSpy");
    if (statusSpy.style.display === "none") {
        disableButtons();
        statusSpy.style.display = "block";
        buttonSpy.style.border = "#EEEEEE 3px solid"
    } else {
        statusSpy.style.display = "none";
        buttonSpy.style.border = "0"
    }
}

window.addEventListener('scroll', () => {
   let parent = document.getElementById('parallax-container');
   let children = parent.getElementsByTagName('div');
   for(let i = 0; i < children.length; i++) {
     children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
   }
}, false)
