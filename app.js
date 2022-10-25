let hamburger = document.querySelector(".hamburger")
let navMenu = document.querySelector(".some-links")



let darkCheck = document.querySelector(".check")
let marketWatch = document.querySelector('.marketwatch')
let forebs = document.querySelector('.forbes')
let buisnessInsider = document.querySelector('.buisness-insider')
let fidelity = document.querySelector('.fidelity')
let wired = document.querySelector('.wired')
let mainContainer = document.querySelector('.main')
let topLeftCircles = document.querySelector('.Group-2533')
let frameDark = document.querySelector('.frame-21')
let frameDark2 = document.querySelector('.frame-22')


darkCheck.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')
    if(document.body.classList.contains('dark-theme')){

    marketWatch.src = "imgs/Group.png"
    forebs.src = "imgs/Forbes-dark-Logo.png"
    buisnessInsider.src = "imgs/Business-Insider-dark-Logo.png"
    fidelity.src = "imgs/Fidelity-dark.png"
    wired.src = "imgs/WIRED-dark.png"
    mainContainer.style.backgroundImage = "url(imgs/Group-2532-dark.png)"
    topLeftCircles.src = "imgs/Group-2533-dark.png"
    frameDark.src = "imgs/Frame-21-dark.png"
    frameDark2.src = "imgs/Frame-22-dark.png"

    }
    
    else
    {

    marketWatch.src = "imgs/MarketWatch-logo.png"
    forebs.src = "imgs/Forbes-Logo.png"
    buisnessInsider.src = "imgs/Business-Insider-Logo.png"
    fidelity.src = "imgs/Fidelity.png"
    wired.src = "imgs/WIRED.png"
    mainContainer.style.backgroundImage = "url(imgs/Group-2532.png)"
    topLeftCircles.src = "imgs/Group-2533.png"
    frameDark.src = "imgs/Frame-21.png"
    frameDark2.src = "imgs/Frame-22.png"    

    }
})

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".some-links").forEach(n => n.addEventListener('click', function(){
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))