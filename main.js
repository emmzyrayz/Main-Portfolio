/* eslint-disable no-undef */
(function($) {
  

  $WIN = $(window);

  // Add the User Agent to the <html>
  // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
  var doc = document.documentElement;
  doc.setAttribute("data-useragent", navigator.userAgent);

  /* Stat Counter
   * ------------------------------------------------------ */
  var clStatCount = function () {
    var statSection = $(".about-stats"),
      stats = $(".stats__count");

    statSection.waypoint({
      handler: function (direction) {
        if (direction === "down") {
          stats.each(function () {
            var $this = $(this);

            $({Counter: 0}).animate(
              {Counter: $this.text()},
              {
                duration: 4000,
                easing: "swing",
                step: function (curValue) {
                  $this.text(Math.ceil(curValue));
                },
              }
            );
          });
        }

        // trigger once only
        this.destroy();
      },

      offset: "90%",
    });
  };

  (function ssInit(){
    clStatCount();
  })();
})(jQuery);