
let lang = navigator.language;

(function () {

    translate();

}())

$('#translate').on('click', translate);


function translate() {
  if (lang == 'fr'){
    print("1");
    $('.en').css('display', 'block').css('visibility', 'visible');
    $('.fr').css('display', 'none').css('visibility', 'none');
    lang = 'en'
  } else {
    print("2");
    $('.fr').css('display', 'block').css('visibility', 'visible');
    $('.en').css('display', 'none').css('visibility', 'none');
    lang = 'fr'
  }
}
