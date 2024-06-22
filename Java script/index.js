let nav=document.querySelector('.nav')
let menu=document.querySelector('.btn-menu')
let close=document.querySelector('.btn-close')
let links=document.querySelectorAll('.list-link')
let windownPathName= window.location.pathname
menu.addEventListener("click",function () {
  nav.classList.toggle('show-menu')
  })
  
close.addEventListener('click',function (){
  nav.classList.remove('show-menu')
})


links.forEach(link => {
let navLinkPathName=new URL(links.href).pathnameathName

    link.addEventListener('click',function (e){
      document.querySelector('.active')?.classList.remove('active')
      link.classList.add('active')
      nav.classList.remove('show-menu')
      }
  )
  })