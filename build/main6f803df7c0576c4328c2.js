(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    function(t, n, e) {},
    function(t, n) {

      function e(t) {

        return (e =
          typeof Symbol === 'function' &&
          typeof Symbol.iterator === 'symbol'
            ? function(t) {

              return typeof t

            }
            : function(t) {

              return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                ? 'symbol'
                : typeof t

            })(t)

      }
      function o(t, n) {

        return !n ||
          (e(n) !== 'object' && typeof n !== 'function')
          ? (function(t) {

            if (void 0 === t) {

              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )

            }
            return t

          })(t)
          : n

      }
      function r(t) {

        var n =
          typeof Map === 'function' ? new Map() : void 0
        return (r = function(t) {

          if (
            t === null ||
            ((e = t),
            Function.toString
              .call(e)
              .indexOf('[native code]') ===
              -1)
          ) { return t }
          var e
          if (typeof t !== 'function') {

            throw new TypeError(
              'Super expression must either be null or a function'
            )

          }
          if (void 0 !== n) {

            if (n.has(t)) return n.get(t)
            n.set(t, o)

          }
          function o() {

            return i(t, arguments, s(this).constructor)

          }
          return (
            (o.prototype = Object.create(t.prototype, {
              constructor: {
                value: o,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
            c(o, t)
          )

        })(t)

      }
      function i(t, n, e) {

        return (i = u()
          ? Reflect.construct
          : function(t, n, e) {

            var o = [null]
            o.push.apply(o, n)
            var r = new (Function.bind.apply(t, o))()
            return e && c(r, e.prototype), r

          }).apply(null, arguments)

      }
      function u() {

        if (
          typeof Reflect === 'undefined' ||
          !Reflect.construct
        ) { return !1 }
        if (Reflect.construct.sham) return !1
        if (typeof Proxy === 'function') return !0
        try {

          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          )

        }
        catch (t) {

          return !1

        }

      }
      function c(t, n) {

        return (c =
          Object.setPrototypeOf ||
          function(t, n) {

            return (t.__proto__ = n), t

          })(t, n)

      }
      function s(t) {

        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {

            return t.__proto__ || Object.getPrototypeOf(t)

          })(t)

      }
      var a = document.createElement('template')
      ;(a.innerHTML =
        '\n  <style>\n    :host {\n      background-color: black;\n      background-position-x: center;\n      background-position-y: center;\n      background-size: cover;\n      box-shadow: inset 0 0 1em 1em black;\n      filter: \n        hue-rotate(110deg) \n        saturate(0.3) \n        brightness(1.2);\n      height: 100%;\n      left: 0;\n      overflow: hidden;\n      position: absolute;\n      top: 0;\n      width: 100%;\n    }\n    video {\n      height: 100%;\n      left: 50%;\n      min-width: 100%;\n      min-height: 56.25vw;\n      position: absolute;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      width: 177.77777778vh;\n    }\n  </style>\n\n  <span>\n    <slot name="video"></slot>  \n    <slot name="content"></slot>\n  </span>\n'),
      customElements.define(
        'video-hero',
        (function(t) {

          !(function(t, n) {

            if (typeof n !== 'function' && n !== null) {

              throw new TypeError(
                'Super expression must either be null or a function'
              )

            }(t.prototype = Object.create(
              n && n.prototype,
              {
                constructor: {
                  value: t,
                  writable: !0,
                  configurable: !0
                }
              }
            )),
            n && c(t, n)

          })(i, t)
          var n
          var e
          var r =
                ((n = i),
                (e = u()),
                function() {

                  var t
                  var r = s(n)
                  if (e) {

                    var i = s(this).constructor
                    t = Reflect.construct(r, arguments, i)

                  }
                  else t = r.apply(this, arguments)
                  return o(this, t)

                })
          function i() {

            var t
            !(function(t, n) {

              if (!(t instanceof n)) {

                throw new TypeError(
                  'Cannot call a class as a function'
                )

              }

            })(this, i),
            (t = r.call(this)).attachShadow({
              mode: 'open'
            }),
            t.shadowRoot.appendChild(
              a.content.cloneNode(!0)
            )
            var n = t.querySelector('video')
            if (
              (n.setAttribute('autoplay', ''),
              n.setAttribute('muted', ''),
              n.setAttribute('loop', ''),
              t.hasAttribute('opaque') &&
                  (t.shadowRoot.style.opacity = '.5'),
              t.hasAttribute('banner'))
            ) {

              var e = '\n          url('.concat(
                t.getAttribute('banner'),
                ')\n        '
              )
              t.shadowRoot.style.backgroundImage = e

            }
            return (
              t.hasAttribute('blur') &&
                  (n.style.filter = 'blur(3px)'),
              t.hasAttribute('noise') &&
                  (t.shadowRoot.innerHTML +=
                    '\n          <svg\n            height="100%"\n            width="100%"\n            style="\n              mix-blend-mode: difference;\n              opacity: .25;\n              position: relative;\n            "\n          >\n            <filter \n              id=\'noise\'\n              x=\'0%\' \n              y=\'0%\' \n              width=\'100%\' \n              height=\'100%\'\n            >\n              <feTurbulence \n                type="fractalNoise" \n                baseFrequency="0.8"\n                numOctaves="1"\n              />\n            </filter>\n            <rect \n              filter="url(#noise)"\n              width=\'100%\' \n              height=\'100%\'\n            />\n          </svg>\n        '),
              t
            )

          }
          return i

        })(r(HTMLElement))
      )

    },
    function(t, n, e) {

      'use strict'
      e.r(n)
      e(0), e.p, e.p, e(1)
      document.body.innerHTML =
        '\n  <video-hero>\n    <video slot="video">\n      <source\n        src="videos/growth.mp4"\n        type="video/mp4"\n      >\n      <source \n        src="videos/growth.webm"\n        type="video/webm"\n      >\n    </video>\n  </video-hero>\n  <video>\n  '

    }
  ],
  [[2, 1]]
])
