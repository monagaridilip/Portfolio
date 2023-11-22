/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')

        })
    }
}
showMenu('nav-toggle','nav-menu')
/*===== Active and Remove =====*/ 
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
//Active Link
navLink.forEach(n => n.classList.remove('active'))
this.classList.add('active')
//remove link
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageXOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home_data, .about_img, .skills_subtitle, .skills_text',{}); 
sr.reveal('.home_img, .about_subtitle, .about_text, .skills_img',{delay: 400}); 
sr.reveal('.home_social-icon',{ interval: 200}); 
sr.reveal('.skills_data, .work_img, .contact_input',{interval: 200}); 