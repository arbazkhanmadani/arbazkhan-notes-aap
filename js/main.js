(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() >10) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });
    
})(jQuery);



document.addEventListener("DOMContentLoaded", function() {

    const exampleText = ["I'm a Web developer","i'm a Coder","I'm a Trainer","I'm a Web Designer"];
        
    const myheader = new AutoTyping({
        id: 'header',
        typeText:exampleText,
        typeSpeed: 100,
        typeDelay: 200,
        typeRandom: false,
        deleteSpeed: 100,
        deleteDelay: 200,
        typeInfinity: true,
        cursor: '|',
        cursorColor: '#000',
        cursorSpeed: 300,
        textColor: 'white'
    })
    myheader.init()
       
    });




   async function downloadCV(){

        //Reading file...................................
    const fileResp = await fetch('notes/ArbazKhanResume.pdf',{
        headers: {
           "Content-Type": "application/pdf",
       }
   })
    
   const file = await fileResp.blob()
   
    //For getting original file name......................
    const name = fileResp.url
    let idx = name.lastIndexOf('/')
    let filename  = name.substring(idx+1)
    console.log(filename)

    //File reading end.................

    anchor =  document.createElement('a') 
    //Creating download button functionality................
      const blob = new Blob([file],{type:"application/pdf"})
       const url = window.URL.createObjectURL(blob)

       anchor.href = url
       anchor.download = filename
       anchor.click()

       anchor.remove()

       window.URL.revokeObjectURL(url)    
    
    }