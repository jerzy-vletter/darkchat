
/**
 * how both functions operate,
 * 
 * step 1: the classes for the items that need to leave the screen are updated to incorparate the class that is linked with the fadeOut animation,
 * step 2: the container that is holding the items that need to appear is set to block, meaning it is no longer hidden on the page,
 * step 3: the items that need to fade in are set to block, meaning that they are no longer hidden,
 * step 4: the classes for the items that need to appear on the screen are updated to incorparate the class that is linked with the fadeIn animation,
 * step 5: the container that is holding that items that need to leave the screen (which is done at step 1 and complete by the time this triggers) are set to none, meaning that they are hidden.
 * step 6: all classes are reset
 */

function hideButton(){
    document.getElementById("LauchButton").classList.toggle("LauchButton-fade-out");
    setTimeout(() => { document.getElementById("textingContainer").style.display = "block"; }, 500);
    setTimeout(() => { document.getElementById("texting").style.display = "block"; document.getElementById("sendMsg").style.display = "block"; }, 500);
    setTimeout(() => { document.getElementById("texting").classList.toggle("texting-fade-in"); document.getElementById("sendMsg").classList.toggle("sendMsg-fade-in"); }, 700);
    setTimeout(() => { document.getElementById("LauchContainer").style.display = "none"; }, 500);
    setTimeout(() => { document.getElementById("LauchButton").classList.toggle("LauchButton-fade-out"); document.getElementById("texting").classList.toggle("texting-fade-in"); document.getElementById("sendMsg").classList.toggle("sendMsg-fade-in"); }, 500);
    
}

function resetapp(){
    document.getElementById("texting").classList.toggle("texting-fade-out");
    document.getElementById("sendMsg").classList.toggle("sendMsg-fade-out");
    setTimeout(() => { document.getElementById("LauchContainer").style.display = "block"; }, 500);
    setTimeout(() => { document.getElementById("LauchButton").style.display = "block"; }, 500);
    setTimeout(() => { document.getElementById("LauchButton").classList.toggle("LauchButton-fade-in"); }, 700);
    setTimeout(() => { document.getElementById("textingContainer").style.display = "none"; }, 500);
    setTimeout(() => { document.getElementById("LauchButton").classList.toggle("LauchButton-fade-in"); document.getElementById("texting").classList.toggle("texting-fade-out"); document.getElementById("sendMsg").classList.toggle("sendMsg-fade-out"); }, 500);
}
