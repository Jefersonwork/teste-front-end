$(function(){

    var nav = $("nav");

    $(window).scroll(function(){
        
        if($(this).scrollTop() > 70) {
            nav.addClass("navbar2");
        } else {
            nav.removeClass("navbar2");
        }
                
    })

    var $doc = $('html, body');
    
    $('a').click(function() {
        
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        
        return false;
    });

    var slide = 01;
    var titulo = $(".slideT");
    var texto = $(".slideP");

    $(".left").click(function(){
        slide--;

        if (slide < 1 || slide === 0) {
            slide = 4;
        }

        $("#contador").text(slide);

        if (slide == 1) {
            titulo.text("LOREM 1");
            texto.html("Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Ut enim ad minim veniam, quis <br> nostrud exercitation ultamco laboris nisi <br> ut aliquib ex es commodo consequat.")
        }
        if (slide == 2){
            titulo.text("LOREM 2");
            texto.html("Lorem 2 ipsum 2 dolor 2 sit 2 amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. 2 Ut enim ad minim veniam, quis <br> nostrud exercitation ultamco laboris nisi <br> ut aliquib ex es commodo consequat.")
        }
        if (slide == 3){
            titulo.text("LOREM 3");
            texto.html("Lorem 3 ipsum 3 dolor 3 sit 3 amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. 3 Ut enim ad minim veniam, quis <br> nostrud exercitation ultamco laboris nisi <br> ut aliquib ex es commodo consequat.")
        }
        if (slide == 4){
            titulo.text("LOREM 4");
            texto.html("Lorem 4 ipsum 4 dolor 4 sit 4 amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. 4 Ut enim ad minim veniam, quis <br> nostrud exercitation ultamco laboris nisi <br> ut aliquib ex es commodo consequat.")
        }
    });
    $(".right").click(function(){
        slide++;

        if (slide > 4 || slide === 5) {
            slide = 1;
        }

        $("#contador").text(slide);

        if (slide == 1) {
            titulo.text("LOREM 1");
            texto.html("Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. Ut enim ad minim veniam, quis <br> nostrud exercitation ultamco laboris nisi <br> ut aliquib ex es commodo consequat.")
        }
        if (slide == 2){
            titulo.text("LOREM 2");
            texto.html("Lorem 2 ipsum 2 dolor 2 sit 2 amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. 2 Ut enim ad minim veniam, quis <br> nostrud exercitation ultamco laboris nisi <br> ut aliquib ex es commodo consequat.")
        }
        if (slide == 3){
            titulo.text("LOREM 3");
            texto.html("Lorem 3 ipsum 3 dolor 3 sit 3 amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. 3 Ut enim ad minim veniam, quis <br> nostrud exercitation ultamco laboris nisi <br> ut aliquib ex es commodo consequat.")
        }
        if (slide == 4){
            titulo.text("LOREM 4");
            texto.html("Lorem 4 ipsum 4 dolor 4 sit 4 amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua. 4 Ut enim ad minim veniam, quis <br> nostrud exercitation ultamco laboris nisi <br> ut aliquib ex es commodo consequat.")
        }
    });



    $("#form").validate({
        rules:{
            fNome:{
                required: true
            },
            fEmail:{
                required: true,
                email: true
            },
            fTelefone:{
                required: true,
                minlength: 11
            },
            fMensagem:{
                required: true
            }
        },
        messages:{
            
            fNome:{
                required: "Favor colocar seu nome."
            },
            fEmail:{
                required: "Favor colocar seu E-Mail."
            },
            fTelefone:{
                required: "Favor colocar seu telefone.",
                minlength: "Seu número está incompleto."
            },
            fMensagem:{
                required: "Favor escrever sua mensagem."
            }
        }
    });
});