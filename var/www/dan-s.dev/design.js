window.onscroll = function () {

    let isScrolledNav = false

    // Y offset to scroll past
    const ScrollPointNav = 10

    //HTML Elements
    const nav = document.querySelector('.nav-container')
    const head1 = document.querySelector('.heading-1')
    const head3 = document.querySelector('.heading-3')
    
    if ( window.pageYOffset > ScrollPointNav && !isScrolledNav ) {
        nav.classList.add("scroll")
        head1.classList.add("scroll")
        head3.classList.add("scroll")
        isScrolledNav = true
    }

    function onScroll() {
        if ( window.pageYOffset > ScrollPointNav && !isScrolledNav ) {
            nav.classList.add("scroll")
            head1.classList.add("scroll")
            head3.classList.add("scroll")
            isScrolledNav = true
        }   else if ( window.pageYOffset <= ScrollPointNav && isScrolledNav ) {
            nav.classList.remove("scroll")
            head1.classList.remove("scroll")
            head3.classList.remove("scroll")
            isScrolledNav = false
            }
    }

    onScroll ()
    return onScroll

}()

document.addEventListener('click', function ClickOutsideNav(event){
    const nav = document.querySelector('.mobile-nav-container')
    const navBtn = document.querySelector('.btn-burger')
    const checkbox = document.getElementById('mobile-nav')

    if(nav.contains(event.target) && checkbox.checked === true) {
        checkbox.checked = false
        console.log("clicked")
    }
});

let list = document.querySelectorAll(".grid-item");

console.log(list);
list.forEach(function(e){
    e.addEventListener('mouseover', function(){
        let item = this.children
        let child = item[0].children
        let cchild = child[1].children
        child[0].classList.add('hover')
        child[1].classList.add('hover')
        child[2].classList.add('hover')
        cchild[0].classList.add('hover')
        cchild[1].classList.add('hover')
    }, false);
    e.addEventListener('mouseout', function(){
        let item = this.children
        let child = item[0].children
        let cchild = child[1].children
        child[0].classList.remove('hover')
        child[1].classList.remove('hover')
        child[2].classList.remove('hover')
        cchild[0].classList.remove('hover')
        cchild[1].classList.remove('hover')
    }, false);
});

function scrollToHome() {
    const anchorHome = document.getElementById("home")
    anchorHome.scrollIntoView({behavior: "smooth"})
}
function scrollToAbout() {
    const anchorAbout = document.getElementById("about")
    anchorAbout.scrollIntoView({behavior: "smooth"})
}
function scrollToProjects() {
    const anchorAbout = document.getElementById("projects")
    anchorAbout.scrollIntoView({behavior: "smooth"})
}
function scrollToTech() {
    const anchorAbout = document.getElementById("tech")
    anchorAbout.scrollIntoView({behavior: "smooth"})
}
