angular
  .module("ccApp")
  .factory('fakeScroll', ["$document", "$window",

    function($document, $window) {

      var w = $window;
      var d = $document[0];
      var raf = w.requestAnimationFrame || w.setImmediate || function(c) {
        return setTimeout(c, 0);
      };

      function initEl(el) {
        if (el.hasOwnProperty('data-simple-scrollbar')) return;
        Object.defineProperty(el, 'data-simple-scrollbar', new SimpleScrollbar(el));
      };

      function ss(el) {

        this.target = el;

        this.bar = '<div class="ss-scroll">';

        this.wrapper = d.createElement('div');
        this.wrapper.setAttribute('class', 'ss-wrapper');

        this.el = d.createElement('div');
        this.el.setAttribute('class', 'ss-content');

        this.wrapper.appendChild(this.el);

        while (this.target.firstChild) {
          this.el.appendChild(this.target.firstChild);
        }
        this.target.appendChild(this.wrapper);

        this.target.insertAdjacentHTML('beforeend', this.bar);
        this.bar = this.target.lastChild;

        this.moveBar();


        this.el.addEventListener('scroll', this.moveBar.bind(this));
        this.el.addEventListener('mouseenter', this.moveBar.bind(this));

        this.target.classList.add('ss-container');

      };

      ss.prototype = {
        moveBar: function(e) {
          var totalHeight = this.el.scrollHeight,
            ownHeight = this.el.clientHeight,
            _this = this;

          this.scrollRatio = ownHeight / totalHeight;

          raf(function() {
            // Hide scrollbar if no scrolling is possible
            if (_this.scrollRatio === 1) {
              _this.bar.classList.add('ss-hidden')
            } else {
              _this.bar.classList.remove('ss-hidden')
              _this.bar.style.cssText = 'height:' + (_this.scrollRatio) * 100 + '%; top:' + (_this.el.scrollTop / totalHeight) * 100 + '%';
            }
          });
        }
      };

      var stopScroll = function(el) {
        var badScrollArea = el.getElementsByClassName('ss-content')[0];
        var screen = w.innerWidth || d.body.clientWidth;

        if (screen > 1150) {
          el.onwheel = function(e) {
            var delta = e.deltaY || e.detail || e.wheelDelta;

            if (delta < 0 && badScrollArea.scrollTop == 0) {
              return false
            }
            if (delta > 0 && badScrollArea.scrollHeight - badScrollArea.clientHeight - badScrollArea.scrollTop <= 1) {
              return false
            }
          }
        } else {
          el.onwheel = function(e) {
            return true;
          }
        }
      }

      function setHeight(el) {
        var css = getComputedStyle(el);
        var contentHeight = el.getElementsByClassName("ss-wrap-js")[0].clientHeight;
        var cssMaxHeight = parseInt(css['max-height']);
        if (contentHeight > cssMaxHeight) {
          el.style.height = css['max-height'];
          stopScroll(el);
        } else {
          el.style.height = contentHeight + 'px';
          el.onwheel = function(e) {
            return true;
          }
        }

      };

      ss.initEl = initEl;
      ss.setHeight = setHeight;

      SimpleScrollbar = ss;

      return SimpleScrollbar;
    }

  ]);