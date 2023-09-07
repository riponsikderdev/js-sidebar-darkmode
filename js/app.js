// NAV AND SIDEBAR STARTS HERE
let menubtn = document.querySelector(".menu_btn")
let sidebar = document.querySelector(".sidebar")

function openSidebar() {
    sidebar.classList.add('active')
}

menubtn.addEventListener("click", openSidebar)

let crossbtn = document.querySelector('.cross_btn')

function closeSidebar(event) {
    if (event.target.classList.contains("sidebar") ||
        event.target.classList.contains("cross_btn")
    ) {
        sidebar.classList.remove('active')
    } else {
        return false;
    }
}

crossbtn.addEventListener("click", closeSidebar)

sidebar.addEventListener("click", closeSidebar)
// NAV AND SIDEBAR ENDS HERE
// WRAPPER STARTS HERE
let darkmodebtn = document.querySelector(".darkModeToggler")
let body = document.querySelector("body")
let sunicon = document.querySelector(".sunicon")
let heading = document.querySelector(".heading")


darkmodebtn.addEventListener("click", () => {
    if (body.classList.contains("darkmode")) {
        body.classList.remove("darkmode")
        sunicon.style.marginTop = '0px'
        heading.innerHTML = 'LIGHT MODE'
    } else {
        body.classList.add("darkmode")
        sunicon.style.marginTop = '-50px'
        heading.innerHTML = "DARK MODE"
    }
})
// WRAPPER ENDS HERE