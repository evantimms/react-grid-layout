webpackJsonp([6],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(10);
	var _ = __webpack_require__(13);
	var WidthProvider = __webpack_require__(3).WidthProvider;
	var ReactGridLayout = __webpack_require__(3);
	ReactGridLayout = WidthProvider(ReactGridLayout);

	var GridPropertyLayout = React.createClass({
	  displayName: 'GridPropertyLayout',

	  mixins: [PureRenderMixin],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      isDraggable: true,
	      isResizable: true,
	      items: 20,
	      rowHeight: 30,
	      cols: 12
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {};
	  },
	  generateDOM: function generateDOM() {
	    // Generate items with properties from the layout, rather than pass the layout directly
	    var layout = this.generateLayout();
	    return _.map(_.range(this.props.items), function (i) {
	      return _jsx('div', {
	        _grid: layout[i]
	      }, i, _jsx('span', {
	        className: 'text'
	      }, void 0, i));
	    });
	  },
	  generateLayout: function generateLayout() {
	    var p = this.props;
	    return _.map(new Array(p.items), function (item, i) {
	      var w = _.result(p, 'w') || Math.ceil(Math.random() * 4);
	      var y = _.result(p, 'y') || Math.ceil(Math.random() * 4) + 1;
	      return { x: i * 2 % 12, y: Math.floor(i / 6) * y, w: w, h: y, i: i.toString() };
	    });
	  },


	  onLayoutChange: function onLayoutChange(layout) {
	    this.props.onLayoutChange(layout);
	  },

	  render: function render() {
	    return React.createElement(
	      ReactGridLayout,
	      _extends({ onLayoutChange: this.onLayoutChange
	      }, this.props),
	      this.generateDOM()
	    );
	  }
	});

	module.exports = GridPropertyLayout;

	if (__webpack_require__.c[0] === module) {
	  __webpack_require__(9)(module.exports);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }
]);