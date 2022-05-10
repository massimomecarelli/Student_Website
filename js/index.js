function flipCards(){
    var Switch = document.getElementById("switcher");/*prendere un refrimento del checkbox*/
    const card = document.querySelectorAll('.card');/*prendere un refrimento di tutto gli elemnti avendo class card*/
    if (Switch.checked == true){
        card.forEach(c=>{/* iterare Nodelist*/
        c.classList.toggle('is-flipped');});
    } else {
        card.forEach(c=>{
        c.classList.toggle('is-flipped');});
    }
}

window.onload = function(){
    document.getElementById("intro").style.display="block";
};

function toggleText(currtext){
    var thisText = document.getElementById(currtext).style;
    const t = document.querySelectorAll('.text-area p');
    t.forEach(s=>{/* iterare Nodelist*/
    s.style.display="none";});
    thisText.display= "block";
}

function accordion(btn,id){
    btn.classList.toggle("active");
    var panel = document.getElementById(id);
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}