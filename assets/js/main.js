const toggleMode = document.querySelector('.toggle-mode')
const headerSticky = document.querySelector('.header_fixed')
const body = document.querySelector('body')
const menuBar = document.querySelector('.menu-bar')
let theme;
// window on scroll
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        headerSticky.classList.add("active")
    } else {
        headerSticky.classList.remove("active")
    }
})

// toggle light/night mode
toggleMode.addEventListener('click', () => {
    toggleMode.classList.toggle('active')
    toggleMode.classList.contains('active') ? body.classList.add('active-darkmode') : body.classList.remove('active-darkmode')
    body.classList.contains('active-darkmode') ? theme = 'dark' : theme = 'light'
    localStorage.setItem('currentTheme', JSON.stringify(theme));

})

let getTheme = JSON.parse(localStorage.getItem('currentTheme'))
if (getTheme === 'dark') {
    toggleMode.classList.add('active')
    body.classList.add('active-darkmode')
}

// toggle menu bar
menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active')
})

const skills = [{
    img: './assets/images/html-css.png',
    title: 'HTML & CSS',
    desc: 'The HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.',
}, {
    img: './assets/images/javascript.png',
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
    img: './assets/images/github.png',
    title: 'Github',
    desc: 'GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code.',
}, {
    img: './assets/images/postman.png',
    title: 'Postman',
    desc: 'Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.',
}, {
    img: './assets/images/figma.png',
    title: 'Figma',
    desc: '(I use this to covert Design to HTML). Figma is a web-based graphics editing and user interface design app. You can use it to do all kinds of graphic design work from wireframing websites, designing mobile app interfaces, ',
}]

const boxSkills = document.querySelector('.box_skills')
const htmlInner = skills.map((item) => {
    return ` 
    <div class="col-lg-4 col-md-6 col-12 box_skill-item d-flex flex-column">
        <div class="box trans_3 d-flex flex-column justify-content-center">
            <div class="box-img">
                <img src="${item.img}" alt="image">
            </div>
            <div class="box-details d-flex flex-column text-center">
                <div class="box-heading">${item.title}</div>
                <div class="box-desc">${item.desc}</div>
            </div>
        </div>
    </div>`
}).join('')

boxSkills.innerHTML = htmlInner