
let lang = navigator.language;
console.log(lang);

(function () {
  if (lang != 'fr') {
    translate();
  }
})()

$('#translate').on('click', translate);


function translate() {
  if (lang == 'fr'){
    $('.en').css('display', 'block').css('visibility', 'visible');
    $('.fr').css('display', 'none').css('visibility', 'hidden');
    lang = 'en'
  } else {
    $('.fr').css('display', 'block').css('visibility', 'visible');
    $('.en').css('display', 'none').css('visibility', 'hidden');
    lang = 'fr'
  }
}
