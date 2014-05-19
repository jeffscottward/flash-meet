'use strict';

////////////
// @class slideOutMenu
////////////
(function(app, $){
  app.slideOutMenu = {
    cache: {
      triggerEL: $('.fa-bars'),
      targetEL: $('body')
    },
    events: {
      toggleMenu: function toggleMenuFunc() {
        app.slideOutMenu.cache.targetEL.toggleClass('mobile-menu-showing');
      }
    }
  }

  app.slideOutMenu.cache.triggerEL.click(function menuTriggerFuncCB(){
    app.slideOutMenu.events.toggleMenu();
  })

})(window.app || {}, jQuery || $);
