'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _RequestRow = require('../../../components/RequestRow');

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