function hideButton(){
    document.getElementById("LauchButton").classList.toggle("LauchButton-fade-out");
    document.getElementById("texting").classList.toggle("texting-fade-in");
    document.getElementById("sendMsg").classList.toggle("sendMsg-fade-in");
    setTimeout(() => { document.getElementById("LauchContainer").style.display = "none"; }, 500);
    setTimeout(() => { document.getElementById("textingContainer").style.display = "block"; }, 500);
    setTimeout(() => { document.getElementById("LauchButton").classList.toggle("LauchButton-fade-out"); document.getElementById("texting").classList.toggle("texting-fade-in"); document.getElementById("sendMsg").classList.toggle("sendMsg-fade-in"); }, 500);
    
}

function resetapp(){
    document.getElementById("LauchButton").classList.toggle("LauchButton-fade-in");
    document.getElementById("texting").classList.toggle("texting-fade-out");
    document.getElementById("sendMsg").classList.toggle("sendMsg-fade-out");
    setTimeout(() => { document.getElementById("textingContainer").style.display = "none"; }, 500);
    setTimeout(() => { document.getElementById("LauchContainer").style.display = "block"; }, 500);
    setTimeout(() => { document.getElementById("LauchButton").classList.toggle("LauchButton-fade-in"); document.getElementById("texting").classList.toggle("texting-fade-out"); document.getElementById("sendMsg").classList.toggle("sendMsg-fade-out"); }, 500);
}
