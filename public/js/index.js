
let lang = navigator.language;

(function () {


    if(lang!="fr"){
        translate()
    }

    else{
        $('.fr').css('display', 'block').css('visibility', 'visible');
        $('.en').css('display', 'none').css('visibility', 'none');
        lang = 'fr'
    }



}())

$('#translate').on('click', translate);


function translate() {
  if (lang == 'fr'){

    $('.en').css('display', 'block').css('visibility', 'visible');
    $('.fr').css('display', 'none').css('visibility', 'none');
    lang = 'en'
  } else {

    $('.fr').css('display', 'block').css('visibility', 'visible');
    $('.en').css('display', 'none').css('visibility', 'none');
    lang = 'fr'
  }
}
