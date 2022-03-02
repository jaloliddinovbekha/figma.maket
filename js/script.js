$(function() {
    $('.btn_left').click(function() {
        /* .on('click', function()) takoy sposob toje mojno ispolzovat */
        $('.nav-navbar').toggleClass('active');
        $('.btn_bar').toggleClass('active');
        $('.times-off').toggleClass('active');
        $('.nav-info').toggleClass('active');
    })
    
    
    
      // menu end
    $('.phone-block').hide();
    $('.btn-primary-self').click(function () { 
        $('.phone-block').slideDown(1000);
    });
    $('.exitPhone').click(function () { 
        $('.phone-block').slideUp(1000);
    });
    
    
   
})


const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 500)
    })

    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        // dokument bu obyekt digani
        // scrollTop bu metod digani
    })