$(document).ready(function(){

    $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Fullstack Web Developer", 
                  "Project Management Professional",
                  "Agile SCRUM Master",
                  "LEAN Six Sigma Green Belt",
                  "Information Technology Infrastructure Library"
                  ],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false         
    });






}); //End (document).ready

