// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Typing Effect
const roles = [
    "Full Stack Developer",
    "Embedded Systems Engineer",
    "Cyber Security Learner"
];

let i=0,j=0,del=false;

function type(){
    let txt=roles[i];
    if(!del){
        document.querySelector(".typing").textContent=txt.substring(0,j++);
        if(j>txt.length){del=true;setTimeout(type,1000);return;}
    }else{
        document.querySelector(".typing").textContent=txt.substring(0,j--);
        if(j==0){del=false;i=(i+1)%roles.length;}
    }
    setTimeout(type,del?50:100);
}
type();

// Scroll Reveal + Navbar Blur
window.addEventListener("scroll",()=>{
    document.querySelectorAll(".reveal").forEach(el=>{
        if(el.getBoundingClientRect().top < window.innerHeight-100){
            el.classList.add("active");
        }
    });

    document.querySelector(".navbar")
        .classList.toggle("scrolled", window.scrollY > 50);
});

// Cursor Glow
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e=>{
    glow.style.left = e.clientX+"px";
    glow.style.top = e.clientY+"px";
});