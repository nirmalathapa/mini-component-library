'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

var classnames = createCommonjsModule(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ":root {\n  --primary: #2d3a80;\n  --white: #ffffff;\n}\n\n.button {\n  font-family: \"Avenir Next\", Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  background: #36459a;\n  color: #ffffff;\n  text-align: center;\n  border: 1px solid transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  font-size: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: max-content;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: default;\n  user-select: none;\n  text-decoration: none;\n}\n.button::-moz-focus-inner {\n  border-style: \"none\";\n}\n.button:focus, .button:active, .button:focus-visible {\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #36459a;\n  outline: transparent;\n}\n.button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.button .icon {\n  margin-right: 8px;\n}\n\n.btn--primary {\n  background: #36459a;\n  border: 1px solid #36459a;\n}\n.btn--primary:hover {\n  transition: all 0.1s ease;\n}\n.btn--primary:hover {\n  background: #2d3a80;\n}\n\n.btn--secondary {\n  border: 1px solid transparent;\n  background: #e0e7ff;\n  color: #2d3a80;\n}\n.btn--secondary:hover {\n  transition: all 0.1s ease;\n}\n.btn--secondary:hover {\n  background: #c7d2fe;\n}\n\n.btn--tertiary {\n  color: #2d3a80;\n  background-color: transparent;\n  border: 1px solid #36459a;\n}\n.btn--tertiary:hover {\n  background: #36459a;\n  color: #ffffff;\n}\n.btn--tertiary:hover .icon path {\n  stroke: #ffffff;\n}\n.btn--tertiary:focus .icon path, .btn--tertiary:focus-visible .icon path {\n  stroke: #ffffff;\n}\n\n.btn--md {\n  padding: 12px 24px;\n  font-size: 1.2rem;\n}\n\n.btn--lg {\n  padding: 16px 24px;\n  font-size: 1.3rem;\n}";
styleInject(css_248z);

var Button = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "sm" : _b, _c = _a.kind, kind = _c === void 0 ? "primary" : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, children = _a.children, iconLeft = _a.iconLeft;
    return (jsxRuntime.jsxs("button", __assign({ type: "button", "data-testid": "button", disabled: disabled, className: classnames("button", "btn--".concat(kind), "btn--".concat(size)) }, { children: [iconLeft, children] })));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
