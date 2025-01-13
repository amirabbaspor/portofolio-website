/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles/particles.json', function() {
    console.log('callback - particles-js config loaded');
  });


// <i class="fa-solid fa-xmark"></i> 
function toggler(){
    let nav = document.getElementById('nav');
    let icon = document.getElementById('icon-menu');
    if (nav.style.height == 0 || nav.style.height == "0px") {
        nav.style.height = "360px";
        nav.style.padding = "30px 0px";
        icon.classList.replace('fa-bars','fa-xmark');
    } else {
        nav.style.height = 0;
        nav.style.padding = 0;
        icon.classList.replace('fa-xmark','fa-bars');
    }
}


