document.body.onload = function()
{
    var indirizzo = document.getElementById('indirizzo');
    if(indirizzo) {
        indirizzo.textContent = indirizzo.textContent.replace( /[a-zA-Z]/g, 
            function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}
        );
    }

    var menuBtn = document.getElementById("menu-toggle");
    if (menuBtn) {
        menuBtn.onclick = function openMenu() 
        {
            menuBtn.classList.toggle("active")
            var action = menuBtn.getAttribute("data-action");
            if( action == "show-menu") {
                document.getElementById("overlay").classList.add("open");
                menuBtn.setAttribute('data-action','hide-menu');
                document.body.style.overflow = "hidden";
            }
            if( action == "hide-menu") {
                document.getElementById("overlay").classList.remove("open");
                menuBtn.setAttribute('data-action','show-menu');
                document.body.style.overflow = "";
            }
        };
    }
}