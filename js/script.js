
$(document).ready(function () {
    $('.banner').slick({ //classe onde quero o slick
        slidesToShow: 1, //de quantas classes deve mudar
        slidesToScroll: 1,
        autoplay: true, //passagem automatica
        autoplaySpeed: 2000, //tempo de passagem
        fade: true, //transição de passagem de imagens (opacidade)
        speed: 500, //velocidade de passagem
    });
   
    $('.bannersProfessores').slick({ //classe onde quero o slick
        slidesToShow: 1, //de quantas classes deve mudar
        slidesToScroll: 1,
        autoplay: true, //passagem automatica
        autoplaySpeed: 2000, //tempo de passagem
        fade: true, //transição de passagem de imagens (opacidade)
        speed: 500, //velocidade de passagem
    });


});
/* --MENU MOBILE-- */
  document.querySelector(".abrirMenu").onclick = function(){ /*quando selecionar o abrirMenu ao clicar nele*/
    document.documentElement.classList.add("menuAtivo"); /*vai criar uma classe menuAtivo no elemento principal, que é o html*/
   
  }
 
  document.querySelector(".fecharMenu").onclick = function(){
    document.documentElement.classList.remove("menuAtivo"); /*vai remover a classe menuAtivo do elemento principal, que é o html*/
  }