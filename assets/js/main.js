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
    img: '',
    title: 'HTML & CSS',
    desc: '',
}, {
    img: '',
    title: 'Sass',
    desc: '',
}, {
    img: '',
    title: 'Bootstrap',
    desc: '',
}, {
    img: '',
    title: 'Tailwind Css',
    desc: '',
}, {
    img: '',
    title: 'Javascript',
    desc: '',
}, {
    img: '',
    title: 'VueJS',
    desc: '',
}, {
    img: '',
    title: 'Github',
    desc: '',
}, {
    img: '',
    title: 'Postman',
    desc: '',
}, {
    img: '',
    title: 'Figma',
    desc: 'Convert PSD2HTML',
}]

const boxSkills = document.querySelector('.box-skills')
const htmlInner = skills.map((item) => {
    return ` 
    <div class="col-lg-4 col-md-6 col-12">
        <div class="box trans_3 d-flex flex-column justify-content-center">
            <div class="box-img">
                <img src="${item.img}" alt="image">
            </div>
            <div class="box-details text-center">
                <div class="box-heading">${item.title}</div>
                <div class="box-desc">${item.desc}</div>
            </div>
        </div>
    </div>`
}).join('')

boxSkills.innerHTML = htmlInner