var page = $(window)
var pageOffset = page.height() / 1.65
var abcTop = $('section.abc').offset().top - pageOffset
var quoteTop = $('section.history').offset().top - pageOffset
var toolTop = $('section.tools').offset().top - pageOffset

function navScroll() {
  if (page.scrollTop() > 700) {
    $('body').addClass('fixed')
  }
  if (page.scrollTop() === 1) {
    $('header').removeClass('hide-gt-sm')
    $('body').removeClass('fixed')
  }
}

function sectionScroll() {
  if (page.scrollTop() > abcTop || page.height() > 950) {
    $('#abc-1').addClass('show')
    $('#bubble-1').addClass('show')
  }
  if (page.scrollTop() > abcTop + 150 || page.height() > 1050) {
    $('#abc-2').addClass('show')
    $('#bubble-2').addClass('show')
  }
  if (page.scrollTop() > abcTop + 300 || page.height() > 1150) {
    $('#abc-3').addClass('show')
    $('#bubble-3').addClass('show')
  }
  if (page.scrollTop() > toolTop) {
    $('.combo-wrap').addClass('show')
  }
  if (page.scrollTop() > quoteTop) {
    $('.quote').addClass('show')
  }
}

$(function() {
  sectionScroll()
  $(window).scroll(function () {
    navScroll()
    sectionScroll()
  })
})
