webpackHotUpdate(7,{

/***/ 1427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _campaign = __webpack_require__(1421);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(839);

var _web2 = _interopRequireDefault(_web);

var _Layout = __webpack_require__(1408);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(534);

var _routes = __webpack_require__(833);

var _RequestRow = __webpack_require__(1430);

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ivan/kickstart/pages/campaigns/requests/index.js?entry',
    _this = undefined;
// import {Router} from '../../routes';
// import ContributeForm from '../../components/ContributeForm';


var RequestIndex = function RequestIndex(_ref) {
    var address = _ref.address,
        requests = _ref.requests,
        requestCount = _ref.requestCount,
        approversCount = _ref.approversCount;
    var Header = _semanticUiReact.Table.Header,
        Row = _semanticUiReact.Table.Row,
        HeaderCell = _semanticUiReact.Table.HeaderCell,
        Body = _semanticUiReact.Table.Body;

    var renderRows = function renderRows() {
        return requests.map(function (request, index) {
            return _react2.default.createElement(_RequestRow2.default, {
                request: request,
                key: index,
                address: address,
                id: index,
                approversCount: approversCount,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            });
        });
    };

    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address + '/requests/new', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, _react2.default.createElement(Header, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement(Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, _react2.default.createElement(HeaderCell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, renderRows())), _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }, 'Fount ', requestCount, ' Request'));
};

RequestIndex.getInitialProps = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, approversCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        address = props.query.address;
                        campaign = (0, _campaign2.default)(address);
                        _context.next = 4;
                        return campaign.methods.getRequestsCount().call();

                    case 4:
                        requestCount = _context.sent;
                        _context.next = 7;
                        return campaign.methods.approversCount().call();

                    case 7:
                        approversCount = _context.sent;
                        _context.next = 10;
                        return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                            return campaign.methods.requests(index).call();
                        }));

                    case 10:
                        requests = _context.sent;

                        console.log(requests);
                        return _context.abrupt('return', {
                            address: address,
                            requests: requests,
                            requestCount: requestCount,
                            approversCount: approversCount
                        });

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function (_x) {
        return _ref2.apply(this, arguments);
    };
}();

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGF5b3V0IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJUYWJsZSIsIkxpbmsiLCJSZXF1ZXN0Um93IiwiUmVxdWVzdEluZGV4IiwiYWRkcmVzcyIsInJlcXVlc3RzIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJtYXJnaW5Cb3R0b20iLCJnZXRJbml0aWFsUHJvcHMiLCJwcm9wcyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVEsQUFBVTs7OztBQUN6QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQU0sQUFBTSxBQUFROztBQUc1QixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7Ozs7O0FBSHZCO0FBQ0E7OztBQUlBLElBQU0sZUFBYyxTQUFkLEFBQWMsbUJBRVg7UUFESixBQUNJLGVBREosQUFDSTtRQURLLEFBQ0wsZ0JBREssQUFDTDtRQURlLEFBQ2Ysb0JBRGUsQUFDZjtRQUQ2QixBQUM3QixzQkFENkIsQUFDN0I7UUFBQSxBQUNFLFNBREYsQUFDbUMsdUJBRG5DLEFBQ0U7UUFERixBQUNVLE1BRFYsQUFDbUMsdUJBRG5DLEFBQ1U7UUFEVixBQUNlLGFBRGYsQUFDbUMsdUJBRG5DLEFBQ2U7UUFEZixBQUMyQixPQUQzQixB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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/ivan/kickstart/pages/campaigns/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/ivan/kickstart/pages/campaigns/requests/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy40ZDVjYzg3YjViN2UxMDhmNmYzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzPzgzZTdmZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQge0NhcmQsIEdyaWQsIEJ1dHRvbiwgVGFibGV9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0Jztcbi8vIGltcG9ydCB7Um91dGVyfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuLy8gaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0nO1xuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93JztcblxuY29uc3QgUmVxdWVzdEluZGV4PSAoXG4gICAge2FkZHJlc3MsIHJlcXVlc3RzLCByZXF1ZXN0Q291bnQsIGFwcHJvdmVyc0NvdW50fVxuICAgICkgPT4ge1xuICAgIGNvbnN0IHtIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keX0gPSBUYWJsZTtcblxuICAgIGNvbnN0IHJlbmRlclJvd3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICByZXF1ZXN0cy5tYXAoKHJlcXVlc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxSZXF1ZXN0Um93IFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0PXtyZXF1ZXN0fVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzPXthZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICBpZD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50PXthcHByb3ZlcnNDb3VudH1cbiAgICAgICAgICAgICAgICAvPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMz5SZXF1ZXN0czwvaDM+XG4gICAgICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHthZGRyZXNzfS9yZXF1ZXN0cy9uZXdgfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsb2F0ZWQ9J3JpZ2h0JyBzdHlsZT17e21hcmdpbkJvdHRvbTogMTB9fT5BZGQgUmVxdWVzdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+SUQ8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPlJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmFsIENvdW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxCb2R5PlxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyUm93cygpfVxuICAgICAgICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8ZGl2PkZvdW50IHtyZXF1ZXN0Q291bnR9IFJlcXVlc3Q8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuUmVxdWVzdEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHthZGRyZXNzfSA9IHByb3BzLnF1ZXJ5XG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcbiAgICBjb25zdCByZXF1ZXN0Q291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFJlcXVlc3RzQ291bnQoKS5jYWxsKCk7XG4gICAgY29uc3QgYXBwcm92ZXJzQ291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVyc0NvdW50KCkuY2FsbCgpO1xuXG4gICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSkuZmlsbCgpLm1hcCgoZWxlbWVudCwgaW5kZXgpPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKVxuICAgICAgICB9KVxuICAgICk7XG4gICAgY29uc29sZS5sb2cocmVxdWVzdHMpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIHJlcXVlc3RzLFxuICAgICAgICByZXF1ZXN0Q291bnQsXG4gICAgICAgIGFwcHJvdmVyc0NvdW50XG4gICAgfTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQTFDQTtBQUNBO0FBOENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBSEE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBQUE7QUFNQTtBQUVBO0FBREE7QUFDQTtBQUZBO0FBTkE7QUFDQTtBQVVBOztBQUdBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFDQTtBQWRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW9CQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==