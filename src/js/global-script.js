// Если на проекте jQuery
$( document ).ready(function() {
    // fix top-menu
    var shrinkHeader = 150;
    var head = $('.page-header');
    var heightHeader = head.height();
    $(window).scroll(function() {
      var scroll = $(this).scrollTop();
      if ( scroll >= shrinkHeader ) {
          // $('body').css('paddingTop',heightHeader);
          head.addClass('shrink');
        }
        else {
            // $('body').css('paddingTop',0);
            head.removeClass('shrink');
        }
    });
  // code
  $('.accordion-group').ariaAccordion({});
  $('.accordion-section').ariaAccordion({
    accGroupIdPrefix: "accordion-section--",
    accClass: "accordion-section__accordion",
    headingClass: "accordion-section__accordion-heading",
    btnClass: "accordion-section__accordion-btn",
    panelClass: "accordion-section__accordion-panel",
    contentClass: "accordion-section__accordion-content",
    expandedClass: "accordion-section__accordion_expanded",
    btnExpandedClass: "accordion-section__accordion-btn_expanded",
    panelExpandedClass: "accordion-section__accordion-panel_expanded"
  });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

(function(){
  // calendar
  document.addEventListener('DOMContentLoaded', () => {
    const calendar = new VanillaCalendar('#calendar');
    calendar.init();
  });
  // calendar
  document.addEventListener('DOMContentLoaded', () => {
    const calendar = new VanillaCalendar('#calendar-2');
    calendar.init();
  });
}());


// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
