let tablinks= document.getElementsByClassName("tab-links");
let tabinfos= document.getElementsByClassName("tab-info");

function openTab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-links');
    }
    for(tabinfo of tabinfos){
        tabinfo.classList.remove('active-info');
    }
    event.currentTarget.classList.add('active-links');
    document.getElementById(tabname).classList.add('active-info');
}