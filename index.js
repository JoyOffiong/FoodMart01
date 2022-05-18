let themeButton=document.querySelector('.theme'),
    mainWrap=document.querySelector('.mainwrap');
    menuBar=document.querySelector('.hamburger-icon'),
    closeBar=document.querySelector('.close')
  

    themeButton.addEventListener('click', () =>{
        if(mainWrap.classList.contains('dark')){
            mainWrap.classList.remove('dark')
            menuBar.classList.remove('.dark')
            closeBar.classList.remove('.dark')
            
      
            
        }
        else{
            mainWrap.classList.add('dark')
            menuBar.classList.add('.dark')
            closeBar.classList.add('.dark')
            themeButton.style.color ='white'
              
    }
})