"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _paginator = require("paginator");

var _paginator2 = _interopRequireDefault(_paginator);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _Page = require("./Page");

var _Page2 = _interopRequireDefault(_Page);

var lt = "⟨";
var Lt = "«";
var gt = "⟩";
var Gt = "»";

var prevPageText = lt;
var firstPageText = Lt;

var nextPageText = gt;
var lastPageText = Gt;

var Pagination = (function (_React$Component) {
    _inherits(Pagination, _React$Component);

    function Pagination(props) {
        _classCallCheck(this, Pagination);

        _get(Object.getPrototypeOf(Pagination.prototype), "constructor", this).call(this);
        this.buildPages();
    }

    _createClass(Pagination, [{
        key: "onClick",
        value: function onClick(page, e) {
            e.preventDefault();
            this.props.onChange(page);
        }
    }, {
        key: "buildPages",
        value: function buildPages() {
            var pages = [];
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props;
            var _props$itemsCountPerPage = _props.itemsCountPerPage;
            var itemsCountPerPage = _props$itemsCountPerPage === undefined ? 10 : _props$itemsCountPerPage;
            var _props$pageRangeDisplayed = _props.pageRangeDisplayed;
            var pageRangeDisplayed = _props$pageRangeDisplayed === undefined ? 5 : _props$pageRangeDisplayed;
            var _props$activePage = _props.activePage;
            var activePage = _props$activePage === undefined ? 1 : _props$activePage;
            var totalItemsCount = _props.totalItemsCount;

            var pagination = new _paginator2["default"](itemsCountPerPage, pageRangeDisplayed);

            var paginationInfo = pagination.build(totalItemsCount, activePage);
            var pages = [];

            if (paginationInfo.first_page !== paginationInfo.last_page) {
                for (var i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
                    pages.push(_react2["default"].createElement(_Page2["default"], {
                        isActive: i === activePage,
                        key: i,
                        pageNumber: i,
                        onClick: this.onClick.bind(this, i)
                    }));
                }
            }

            paginationInfo.has_previous_page && pages.unshift(_react2["default"].createElement(_Page2["default"], {
                isActive: false,
                key: "prev" + paginationInfo.previous_page,
                pageNumber: paginationInfo.previous_page,
                onClick: this.onClick.bind(this, paginationInfo.previous_page),
                pageText: prevPageText
            }));

            paginationInfo.first_page > 1 && pages.unshift(_react2["default"].createElement(_Page2["default"], {
                isActive: false,
                key: 1,
                pageNumber: 1,
                onClick: this.onClick.bind(this, 1),
                pageText: firstPageText
            }));

            paginationInfo.has_next_page && pages.push(_react2["default"].createElement(_Page2["default"], {
                isActive: false,
                key: "next" + paginationInfo.next_page,
                pageNumber: paginationInfo.next_page,
                onClick: this.onClick.bind(this, paginationInfo.next_page),
                pageText: nextPageText
            }));

            paginationInfo.last_page !== paginationInfo.total_pages && pages.push(_react2["default"].createElement(_Page2["default"], {
                isActive: false,
                key: paginationInfo.total_pages,
                pageNumber: paginationInfo.total_pages,
                onClick: this.onClick.bind(this, paginationInfo.total_pages),
                pageText: lastPageText
            }));

            return _react2["default"].createElement(
                "ul",
                { className: "pagination" },
                " ",
                pages,
                " "
            );
        }
    }], [{
        key: "propTypes",
        value: {
            onChange: _react2["default"].PropTypes.func,
            activePage: _react2["default"].PropTypes.number,
            pageRangeDisplayed: _react2["default"].PropTypes.number,
            itemsCountPerPage: _react2["default"].PropTypes.number,
            totalItemsCount: _react2["default"].PropTypes.number
        },
        enumerable: true
    }]);

    return Pagination;
})(_react2["default"].Component);

exports["default"] = Pagination;
module.exports = exports["default"];