// Your code goes here
const funbus = document.querySelector('.intro img')
funbus.addEventListener('mouseenter', () => {
    funbus.style.transform = 'scale(1.2)'
    funbus.style.transition = 'transform .5s'
})
funbus.addEventListener('mouseleave', () => {
    funbus.style.transform = 'scale(1)'
})
document.querySelectorAll('.container h2').forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = 'deepskyblue'
    })
})
document.querySelectorAll('.container h2').forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.color = 'black'
    })
})
const dogsRule = document.querySelector('#dog')
window.addEventListener('resize', () => {
  dogsRule.src= 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
})
document.querySelectorAll('.nav-link').forEach(element => {
    element.addEventListener('focus', () => {
        element.style.fontSize = '3rem'
        element.style.color = 'limegreen'
    })
})
document.querySelectorAll('.nav-link').forEach(element => {
    element.addEventListener('blur', () => {
        element.style.fontSize = '1.6rem'
        element.style.color = 'black'
    })
})
const rightClick = document.querySelector('.intro h2')
rightClick.addEventListener('contextmenu', () => {
    rightClick.style.backgroundColor = 'purple'
})
const whoKnows = document.querySelector('.logo-heading')
rightClick.addEventListener('auxclick', (e) => {
    e.preventDefault()
    whoKnows.style.backgroundColor = 'red'
})
document.querySelectorAll ('.destination').forEach(element => {
    element.addEventListener ('mouseover', () => {
        element.style.transform = 'scale(1.2)'
        element.style.transition = 'transform .5s'
    })
})
document.querySelectorAll('.nav-link').forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
    })
})

