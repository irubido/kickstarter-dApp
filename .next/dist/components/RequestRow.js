'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = '/Users/ivan/kickstart/components/RequestRow.js';

var RequestRow = function RequestRow(_ref) {
    var request = _ref.request,
        key = _ref.key,
        address = _ref.address,
        id = _ref.id,
        approversCount = _ref.approversCount;
    var Row = _semanticUiReact.Table.Row,
        Cell = _semanticUiReact.Table.Cell;

    var readyToFinalize = request.approvalCount > approversCount / 2;

    var onApprove = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(address);
                            _context.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context.sent;
                            _context.next = 6;
                            return campaign.methods.approveRequest(id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        return function onApprove() {
            return _ref2.apply(this, arguments);
        };
    }();

    var onFinalize = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(address);
                            _context2.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context2.sent;
                            _context2.next = 6;
                            return campaign.methods.finalizeRequest(id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this);
        }));

        return function onFinalize() {
            return _ref3.apply(this, arguments);
        };
    }();

    return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, id), _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, request.description), _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: 'green',
        basic: true,
        onClick: onApprove,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, 'Approve!')), _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: 'teal',
        basic: true,
        onClick: onFinalize,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, 'Finalize!')));
};

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnUiLCJMaW5rIiwiVGFibGUiLCJCdXR0b24iLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJjYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJyZXF1ZXN0Iiwia2V5IiwiYWRkcmVzcyIsImlkIiwiYXBwcm92ZXJzQ291bnQiLCJSb3ciLCJDZWxsIiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxDb3VudCIsIm9uQXBwcm92ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJzZW5kIiwiZnJvbSIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVE7O0FBQ1IsQUFBUSxBQUFXLEFBQ25CLEFBQVEsQUFBTzs7QUFDZixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjLEFBQ3JCLEFBQU8sQUFBYzs7Ozs7Ozs7O0FBRXJCLElBQU0sYUFBYSxTQUFiLEFBQWEsaUJBQWlEO1FBQS9DLEFBQStDLGVBQS9DLEFBQStDO1FBQXRDLEFBQXNDLFdBQXRDLEFBQXNDO1FBQWpDLEFBQWlDLGVBQWpDLEFBQWlDO1FBQXhCLEFBQXdCLFVBQXhCLEFBQXdCO1FBQXBCLEFBQW9CLHNCQUFwQixBQUFvQjtRQUFBLEFBQ3pELE1BRHlELEFBQzVDLHVCQUQ0QyxBQUN6RDtRQUR5RCxBQUNwRCxPQURvRCxBQUM1Qyx1QkFENEMsQUFDcEQsQUFDWjs7UUFBTSxrQkFBa0IsUUFBQSxBQUFRLGdCQUFnQixpQkFBaEQsQUFBaUUsQUFFakU7O1FBQU0sd0JBQUE7NkZBQVksbUJBQUE7MEJBQUE7MEVBQUE7MEJBQUE7cURBQUE7NkJBQ1I7QUFEUSx1Q0FDRyx3QkFESCxBQUNHLEFBQVM7NENBRFo7bUNBR1MsY0FBQSxBQUFLLElBSGQsQUFHUyxBQUFTOzs2QkFBMUI7QUFIUSxnREFBQTs0Q0FBQTs0Q0FJUixBQUFTLFFBQVQsQUFBaUIsZUFBakIsQUFBZ0MsSUFBaEMsQUFBb0M7c0NBQ2hDLFNBTEksQUFJUixBQUF5QyxBQUNyQyxBQUFTO0FBRDRCLEFBQzNDLDZCQURFOzs2QkFKUTs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBQUFaOztvQ0FBQTtxQ0FBQTtBQUFBO0FBQU4sQUFTQTs7UUFBTSx5QkFBQTs2RkFBYSxvQkFBQTswQkFBQTs0RUFBQTswQkFBQTt1REFBQTs2QkFDVDtBQURTLHVDQUNFLHdCQURGLEFBQ0UsQUFBUzs2Q0FEWDttQ0FHUSxjQUFBLEFBQUssSUFIYixBQUdRLEFBQVM7OzZCQUExQjtBQUhTLGlEQUFBOzZDQUFBOzRDQUlULEFBQVMsUUFBVCxBQUFpQixnQkFBakIsQUFBaUMsSUFBakMsQUFBcUM7c0NBQ2pDLFNBTEssQUFJVCxBQUEwQyxBQUN0QyxBQUFTO0FBRDZCLEFBQzVDLDZCQURFOzs2QkFKUzs2QkFBQTs2Q0FBQTs7QUFBQTt5QkFBQTtBQUFiOztxQ0FBQTtxQ0FBQTtBQUFBO0FBQU4sQUFTQTs7MkJBQ0ssY0FBRCxPQUFLLFVBQVUsUUFBZixBQUF1QixVQUFVLFVBQVUsbUJBQW1CLENBQUMsUUFBL0QsQUFBdUU7c0JBQXZFO3dCQUFBLEFBQ0k7QUFESjtLQUFBLGtCQUNLLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQU87QUFBUDtBQUFBLE9BREosQUFDSSxBQUNBLHFCQUFDLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQU87QUFBUDtBQUFBLGVBRkosQUFFSSxBQUFlLEFBQ2YsOEJBQUMsY0FBRDs7c0JBQUE7d0JBQUEsQUFBTztBQUFQO0FBQUEscUJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQUh0QyxBQUdJLEFBQU8sQUFBa0MsQUFDekMsMkJBQUMsY0FBRDs7c0JBQUE7d0JBQUEsQUFBTztBQUFQO0FBQUEsZUFKSixBQUlJLEFBQWUsQUFDZiw0QkFBQyxjQUFEOztzQkFBQTt3QkFBQSxBQUFPO0FBQVA7QUFBQSxlQUFBLEFBQWUsZUFBZ0IsS0FMbkMsQUFLSSxBQUNBLGlDQUFDLGNBQUQ7O3NCQUFBO3dCQUFBLEFBRVE7QUFGUjtBQUFBLGVBRVEsQUFBUSxXQUFSLEFBQW1CLHVCQUNuQixBQUFDO2VBQUQsQUFDVSxBQUNOO2VBRkosQUFHSTtpQkFISixBQUdhOztzQkFIYjt3QkFBQTtBQUFBO0FBQ0ksS0FESixFQVRaLEFBTUksQUFHUSxBQVdSLDhCQUFDLGNBQUQ7O3NCQUFBO3dCQUFBLEFBRUk7QUFGSjtBQUFBLGVBRUksQUFBUSxXQUFSLEFBQW1CLHVCQUNuQixBQUFDO2VBQUQsQUFDVSxBQUNOO2VBRkosQUFHSTtpQkFISixBQUdhOztzQkFIYjt3QkFBQTtBQUFBO0FBQ0ksS0FESixFQXhCWixBQUNJLEFBb0JJLEFBR0ksQUFZZjtBQTFERCxBQTREQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9pdmFuL2tpY2tzdGFydCJ9