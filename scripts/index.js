var tab_links = document.getElementsByClassName("tab-links");
var tab_contents = document.getElementsByClassName("tab-contents");

function opentab(tab_name){
    for(tab_link of tab_links){
        tab_link.classList.remove("active-link");
    }
    for(tab_content of tab_contents){
        tab_content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tab_name).classList.add("active-tab")
}




var sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}