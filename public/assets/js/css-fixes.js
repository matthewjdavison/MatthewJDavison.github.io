// viewheight unit for mobile bug fix:
function defineVH(){
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
defineVH();
window.addEventListener('resize', defineVH());