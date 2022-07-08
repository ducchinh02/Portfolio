const toggleMode = document.querySelector('.toggle-mode')
const headerSticky = document.querySelector('.header_fixed')
const body = document.querySelector('body')
const menuBar = document.querySelector('.menu-bar')
const closeMenu = document.querySelector('.close-menu')
let theme;
const backToTop = document.querySelector('.back-to-top')
// window on scroll
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        headerSticky.classList.add("active")
    } else {
        headerSticky.classList.remove("active")
    }
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.classList.add("active")
    } else {
        backToTop.classList.remove("active")
    }
})
// back to top
backToTop.addEventListener('click',()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Oper
})
// toggle active menu mobile
const menuMobile = document.querySelector('.menu-mobile')
menuBar.addEventListener('click',()=>{
    menuMobile.classList.add('active')
})

const unActiveMenu = () =>{
    menuMobile.classList.remove('active')
}

closeMenu.addEventListener('click',()=>{
    unActiveMenu()
})

const menuMobileLink = document.querySelectorAll('.menu-mobile a')
menuMobileLink.forEach((link)=>{
    link.addEventListener('click',()=>{
        unActiveMenu()
    })
})

// toggle light/night mode
toggleMode.addEventListener('click', () => {
    toggleMode.classList.toggle('active')
    toggleMode.classList.contains('active') ? body.classList.add('active-darkmode') : body.classList.remove('active-darkmode')
    body.classList.contains('active-darkmode') ? theme = 'dark' : theme = 'light'
    localStorage.setItem('currentTheme', JSON.stringify(theme));

})
// get theme from local storage
let getTheme = JSON.parse(localStorage.getItem('currentTheme'))
if (getTheme === 'dark') {
    toggleMode.classList.add('active')
    body.classList.add('active-darkmode')
}

// toggle menu bar
menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active')
})
// data skills
const skills = [{
    img: './assets/images/html-css.webp',
    title: 'HTML & CSS',
    desc: 'The HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.',
}, {
    img: './assets/images/javascript.webp',
    title: 'Javascript',
    desc: 'JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
}, {
    img: './assets/images/sass.webp',
    title: 'Sass',
    desc: 'Sass is a stylesheet language that’s compiled to CSS.Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.',
}, {
    img: './assets/images/bootstrap.webp',
    title: 'Bootstrap',
    desc: 'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.',
}, {
    img: './assets/images/tailwind.webp',
    title: 'Tailwind Css',
    desc: 'Tailwind CSS is self-described as a utility first CSS framework.Tailwind makes it easier for the developer to test out new styles and change the layout.',
}, {
    img: './assets/images/vue.webp',
    title: 'VueJS',
    desc: 'Vue.js is a progressive JavaScript framework, which is used to build UIs (User Interfaces) and SPAs (Single-page Applications). This framework is famous for its fast-paced learning curve.',
}, {
    img: './assets/images/github.webp',
    title: 'Github',
    desc: 'GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code.',
}, {
    img: './assets/images/postman.webp',
    title: 'Postman',
    desc: 'Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.',
}, {
    img: './assets/images/figma.webp',
    title: 'Figma',
    desc: '(I use this to covert Design to HTML). Figma is a web-based graphics editing and user interface design app. You can use it to do all kinds of graphic design work from wireframing websites, designing mobile app interfaces, ',
}]
// data projects
const projects = [
    {
        img: './assets/images/onetouch.webp',
        title : 'Featured Project',
        heading : 'Onetouch Education',
        details : 'Bootstrap + Sass were used to create this education template. This template contains the following sections: Home, About, Courses, Professor, Admin Dashboard, 404...',
        links:{
            git : 'https://github.com/ducchinh02/OneTouch_Education',
            web : 'https://ducchinh02.github.io/OneTouch_Education/Home.html'
        }
    },
    {
        img: './assets/images/mellifera.webp',
        title : 'Featured Project',
        heading : 'Mellifera',
        details: 'A honey-selling template with an eye-catching, user-friendly UI built by HTML/CSS/JS. This template contains the following sections: Home, Product, Blog',
        links:{
            git : 'https://github.com/ducchinh02/Mellifera',
            web : 'https://ducchinh02.github.io/Mellifera/product.html'
        }
    },
    {
        img: './assets/images/login-page.webp',
        title : 'Featured Project',
        heading : 'Login Page Validation',
        details : 'The login template handles user input cases',
        links:{
            git : 'https://github.com/ducchinh02/Login-Page-Validation',
            web : 'https://ducchinh02.github.io/Login-Page-Validation/'
        }
    },
]
// other project
const otherProjects = [
    [{
        id: 1,
        name : 'Online Marketing',
        details : 'Landing Page',
        links:{
            git : 'https://github.com/ducchinh02/Online-Marketing',
            web : 'https://ducchinh02.github.io/Online-Marketing/OnlineMarketing.html'
        },
        build : {
            item1 : 'Bootstrap',
            item2 : 'Sass',
            item3 : 'Javascript',
        }
    },
    {
        id: 2,
        name : 'Payna',
        details : 'Landing Page',
        links:{
            git : 'https://github.com/ducchinh02/Payna',
            web : 'https://ducchinh02.github.io/Payna/'
        },
        build : {
            item1 : 'HTML',
            item2 : 'CSS',
            item3 : 'Bootstrap',
        }
    },
    {
        id: 3,
        name : 'Simple Product Cart',
        details : 'Single Page Application',
        links:{
            git : 'https://github.com/ducchinh02/Simple-ProductCart-VueJS',
            web : 'https://github.com/ducchinh02/Simple-ProductCart-VueJS'
        },
        build : {
            item1 : 'VueJS',
            item2 : 'CSS',
            item3 : '',
        }
    },  {
        id:4,
        name : 'Weather App',
        details : 'Single Page Application',
        links:{
            git : 'https://github.com/ducchinh02/Weather-App---VueJS',
            web : 'https://ducchinh02.github.io/Weather-App---VueJS/weather.html'
        },
        build : {
            item1 : 'VueJS',
            item2 : 'CSS',
            item3 : 'Bootstrap',
        }
    }],
    [{
        id:1,
        name : 'Time Countdown',
        details : 'Coding UI',
        links:{
            git : 'https://github.com/ducchinh02/Time-CountDown',
            web : 'https://ducchinh02.github.io/Time-CountDown/'
        },
        build : {
            item1 : 'Bootstrap',
            item2 : 'CSS',
            item3 : 'Javascript',
        }
    },
    {
        id:2,
        name : 'Translator',
        details : 'Coding UI',
        links:{
            git : 'https://github.com/ducchinh02/Translator',
            web : 'https://ducchinh02.github.io/Translator/'
        },
        build : {
            item1 : 'HTML',
            item2 : 'Tailwind Css',
            item3 : 'Javascript',
        }
    },
    {
        id:3,
        name : 'Music Player',
        details : 'Coding UI',
        links:{
            git : 'https://github.com/ducchinh02/Music-Player',
            web : 'https://ducchinh02.github.io/Music-Player/music-player.html'
        },
        build : {
            item1 : 'Sass',
            item2 : 'Bootstrap',
            item3 : 'Javascript',
        }
    },
    {
        id:4,
        name : 'Instagram Story - Clone',
        details : 'Coding UI',
        links:{
            git : 'https://github.com/ducchinh02/Instagram-Story-Clone',
            web : 'https://ducchinh02.github.io/Instagram-Story-Clone/'
        },
        build : {
            item1 : 'HTML',
            item2 : 'CSS',
            item3 : 'Javascript',
        }
    },]
]
// inner skills
const boxSkills = document.querySelector('.box_skills')
const htmlInner = skills.map((item) => {
    return ` 
    <div class="col-lg-4 col-md-6 col-12 box_skill-item d-flex flex-column">
        <div class="box trans_3 d-flex flex-column justify-content-center">
            <div class="box-img">
                <img src="${item.img}" alt="image">
            </div>
            <div class="box-details d-flex flex-column">
                <div class="box-heading">${item.title}</div>
                <div class="box-desc">${item.desc}</div>
            </div>
        </div>
    </div>`
}).join('')

boxSkills.innerHTML = htmlInner
// inner project
const boxProjects = document.querySelector('.box_projects')
const inner = projects.map((project) => {
    return `
    <div class="box_projects-item col-12">
        <div class="box trans_3 d-flex flex-wrap align-items-center gap-3">
            <div class="box-img">
                <a target="_blank"  href="${project.links['web']}">
                <img src="${project.img}" alt="" srcset=""></a>
            </div>
            <div class="box_desc">
                <div class="box_desc-title">${project.title}</div>
            <a target="_blank"  href="${project.links['web']}">
                <div class="box_desc-heading">${project.heading}</div>
            </a>
                <div class="box_desc-details">${project.details}</div>
                <div class="box_desc-link d-flex align-items-center">
                    <div class="link-icon">
                        <a class="d-inline-block" href="${project.links['git']}" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                    </div>
                    <div class="link-icon trans_3">
                        <a class="d-inline-block" href="${project.links['web']}" target="_blank"><ion-icon name="globe-outline"></ion-icon></a>
                    </div>
                </div>
            </div>
        </div>
    </div> `}).join('')
    boxProjects.innerHTML = inner
// inner other project (landing page)
    const projectLanding = document.querySelector('.project_landing')
    const landingInner = otherProjects[0].map((prj)=>{
        const {id,name,details,links,build} = prj
        return ` <!-- project item -->
        <div class="project_landing-items trans_3 d-flex flex-column gap-3 item">
        <div class="links d-flex justify-content-between">
            <a href="${links.git}" target="_blank" class="links-item d-inline-block"><ion-icon name="logo-github"></ion-icon></a>
            <a href="${links.web}" target="_blank" class="links-item d-inline-block"><ion-icon name="globe-outline"></ion-icon></a>
        </div>
        <div class="box-details d-flex flex-column">
            <div class="box-heading">
            <a href="${links.web}" target="_blank" class="d-block">
               ${id + '. '}${name}
            </a>
              </div>
            <div class="box-desc">${details}</div>
        </div>
        <div class="build_by d-flex gap-3 align-items-center">
            <span class="build_by-item">${build.item1}</span>
            <span class="build_by-item">${build.item2}</span>
            <span class="build_by-item">${build.item3}</span>
        </div>
    </div>
</div>`
    }).join('')
    projectLanding.innerHTML = landingInner
// inner other project (coding ui)
    const codingUI = document.querySelector('.coding_ui')
    const uiInner = otherProjects[1].map((ui)=>{
        const {id,name,details,links,build} = ui
        return ` <!-- project item -->
        <div class="project_landing-items trans_3 d-flex flex-column gap-3 item">
        <div class="links d-flex justify-content-between">
            <a href="${links.git}" target="_blank" class="links-item d-inline-block"><ion-icon name="logo-github"></ion-icon></a>
            <a href="${links.web}" target="_blank" class="links-item d-inline-block"><ion-icon name="globe-outline"></ion-icon></a>
        </div>
        <div class="box-details d-flex flex-column">
            <div class="box-heading">
            <a href="${links.web}" target="_blank" class="d-block">
                ${id + '. '}${name}
            </a>
              </div>
            <div class="box-desc">${details}</div>
        </div>
        <div class="build_by d-flex gap-3 align-items-center">
            <span class="build_by-item">${build.item1}</span>
            <span class="build_by-item">${build.item2}</span>
            <span class="build_by-item">${build.item3}</span>
        </div>
    </div>
</div>`
    }).join('')
    codingUI.innerHTML = uiInner

// owl carousel project landing
    $('.project_landing').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<ion-icon name="arrow-back-outline"></ion-icon>', '<ion-icon name="arrow-forward-outline"></ion-icon>'],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    })
// owl carousel coding ui
    $('.coding_ui').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<ion-icon name="arrow-back-outline"></ion-icon>', '<ion-icon name="arrow-forward-outline"></ion-icon>'],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        // dots : false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
});


sr.reveal(`.about`, );
sr.reveal(`.skills`, );
sr.reveal(`.work`, );
sr.reveal(`.contact`, );
