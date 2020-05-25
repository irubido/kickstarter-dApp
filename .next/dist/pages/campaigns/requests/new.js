'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = '/Users/ivan/kickstart/pages/campaigns/requests/new.js?entry';
// import {Router} from '../../routes';
// import ContributeForm from '../../components/ContributeForm';


var RequestNew = function RequestNew(_ref) {
    var address = _ref.address;

    var _useState = (0, _react.useState)(''),
        _useState2 = (0, _slicedToArray3.default)(_useState, 2),
        description = _useState2[0],
        setDescription = _useState2[1];

    var _useState3 = (0, _react.useState)(''),
        _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
        value = _useState4[0],
        setValue = _useState4[1];

    var _useState5 = (0, _react.useState)(''),
        _useState6 = (0, _slicedToArray3.default)(_useState5, 2),
        recipient = _useState6[0],
        setRecipient = _useState6[1];

    var _useState7 = (0, _react.useState)(''),
        _useState8 = (0, _slicedToArray3.default)(_useState7, 2),
        errorMessage = _useState8[0],
        setErrorMessage = _useState8[1];

    var _useState9 = (0, _react.useState)(false),
        _useState10 = (0, _slicedToArray3.default)(_useState9, 2),
        loading = _useState10[0],
        setLoading = _useState10[1];

    var handleSubmit = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            event.preventDefault();

                            campaign = (0, _campaign2.default)(address);

                            setLoading(true);
                            setErrorMessage('');

                            _context.prev = 4;
                            _context.next = 7;
                            return _web2.default.eth.getAccounts();

                        case 7:
                            accounts = _context.sent;
                            _context.next = 10;
                            return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

                        case 10:

                            _routes.Router.pushRoute('/campaigns/' + address + '/requests');
                            _context.next = 16;
                            break;

                        case 13:
                            _context.prev = 13;
                            _context.t0 = _context['catch'](4);

                            setErrorMessage(_context.t0.message);

                        case 16:
                            setLoading(false);

                        case 17:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[4, 13]]);
        }));

        return function handleSubmit(_x) {
            return _ref2.apply(this, arguments);
        };
    }();

    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address + '/requests', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, 'Back')), _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, 'Create a request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: handleSubmit, error: !!errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, _react2.default.createElement('label', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
        onChange: function onChange(e) {
            return setDescription(e.target.value);
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, _react2.default.createElement('label', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }, 'Value in ether'), _react2.default.createElement(_semanticUiReact.Input, {
        onChange: function onChange(e) {
            return setValue(e.target.value);
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 64
        }
    }, _react2.default.createElement('label', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
        onChange: function onChange(e) {
            return setRecipient(e.target.value);
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 66
        }
    })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Ooops!', content: errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }), _react2.default.createElement(_semanticUiReact.Button, { loading: loading, primary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, 'Create!')));
};

RequestNew.getInitialProps = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        address = props.query.address;
                        return _context2.abrupt('return', {
                            address: address
                        });

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, _this);
    }));

    return function (_x2) {
        return _ref3.apply(this, arguments);
    };
}();

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhbXBhaWduIiwid2ViMyIsIkxheW91dCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJMaW5rIiwiUm91dGVyIiwiUmVxdWVzdE5ldyIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidmFsdWUiLCJzZXRWYWx1ZSIsInJlY2lwaWVudCIsInNldFJlY2lwaWVudCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJnZXRJbml0aWFsUHJvcHMiLCJwcm9wcyIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVEsQUFBVTs7OztBQUN6QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQVMsQUFBUSxBQUFNOztBQUcvQixBQUFRLEFBQU0sQUFBYTs7Ozs7O0FBRjNCO0FBQ0E7OztBQUdBLElBQU0sYUFBWSxTQUFaLEFBQVksaUJBRVQ7UUFESixBQUNJLGVBREosQUFDSTs7b0JBQ2lDLHFCQURqQyxBQUNpQyxBQUFTOzZEQUQxQztRQUFBLEFBQ0UseUJBREY7UUFBQSxBQUNlLDRCQURmOztxQkFFcUIscUJBRnJCLEFBRXFCLEFBQVM7OERBRjlCO1FBQUEsQUFFRSxtQkFGRjtRQUFBLEFBRVMsc0JBRlQ7O3FCQUc2QixxQkFIN0IsQUFHNkIsQUFBUzs4REFIdEM7UUFBQSxBQUdFLHVCQUhGO1FBQUEsQUFHYSwwQkFIYjs7cUJBSW1DLHFCQUpuQyxBQUltQyxBQUFTOzhEQUo1QztRQUFBLEFBSUUsMEJBSkY7UUFBQSxBQUlnQiw2QkFKaEI7O3FCQUt5QixxQkFMekIsQUFLeUIsQUFBUzsrREFMbEM7UUFBQSxBQUtFLHNCQUxGO1FBQUEsQUFLVyx5QkFFaEI7O1FBQU0sMkJBQUE7NkZBQWUsaUJBQUEsQUFBTyxPQUFQOzBCQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUNqQjtrQ0FBQSxBQUFNLEFBRUE7O0FBSFcsdUNBR0Esd0JBSEEsQUFHQSxBQUFTLEFBRTFCOzt1Q0FBQSxBQUFXLEFBQ1g7NENBTmlCLEFBTWpCLEFBQWdCOzs0Q0FOQzs0Q0FBQTttQ0FTVSxjQUFBLEFBQUssSUFUZixBQVNVLEFBQVM7OzZCQUExQjtBQVRPLGdEQUFBOzRDQUFBO21DQVVQLFNBQUEsQUFBUyxRQUFULEFBQWlCLGNBQWpCLEFBQ0YsYUFDQSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FGZixBQUVGLEFBQXdCLFVBRnRCLEFBR0YsV0FIRSxBQUlBLEtBQUssRUFBQyxNQUFNLFNBZEwsQUFVUCxBQUlLLEFBQU8sQUFBUzs7NkJBRXZCOzsyQ0FBQSxBQUFPLDBCQUFQLEFBQStCLFVBaEJ0Qjs0Q0FBQTtBQUFBOzs2QkFBQTs0Q0FBQTs0REFrQmI7OzRDQUFnQixZQWxCSCxBQWtCYixBQUFvQjs7NkJBRXhCO3VDQXBCaUIsQUFvQmpCLEFBQVc7OzZCQXBCTTs2QkFBQTs0Q0FBQTs7QUFBQTtvQ0FBQTtBQUFmOzt5Q0FBQTtxQ0FBQTtBQUFBO0FBQU4sQUF3QkE7OzJCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQyw4QkFBSyx1QkFBQSxBQUFxQixVQUEzQjtzQkFBQTt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BRlIsQUFDSSxBQUNJLEFBSUosMEJBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BTkosQUFNSSxBQUNBLHFDQUFBLEFBQUMsdUNBQUssVUFBTixBQUFnQixjQUFjLE9BQU8sQ0FBQyxDQUF0QyxBQUF1QztzQkFBdkM7d0JBQUEsQUFDSTtBQURKO3VCQUNLLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLGdDQUFBLEFBQUM7a0JBQ2EscUJBQUE7bUJBQUssZUFBZSxFQUFBLEFBQUUsT0FBdEIsQUFBSyxBQUF3QjtBQUQzQzs7c0JBQUE7d0JBSFIsQUFDSSxBQUVJLEFBSUo7QUFKSTtBQUNJLHlCQUdQLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLG1DQUFBLEFBQUM7a0JBQ2EscUJBQUE7bUJBQUssU0FBUyxFQUFBLEFBQUUsT0FBaEIsQUFBSyxBQUFrQjtBQURyQzs7c0JBQUE7d0JBVFIsQUFPSSxBQUVJLEFBSUo7QUFKSTtBQUNJLHlCQUdQLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLDhCQUFBLEFBQUM7a0JBQ2EscUJBQUE7bUJBQUssYUFBYSxFQUFBLEFBQUUsT0FBcEIsQUFBSyxBQUFzQjtBQUR6Qzs7c0JBQUE7d0JBZlIsQUFhSSxBQUVJLEFBSUo7QUFKSTtBQUNJLHlCQUdSLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsVUFBUyxTQUEvQixBQUF3QztzQkFBeEM7d0JBbkJKLEFBbUJJLEFBQ0E7QUFEQTt3QkFDQSxBQUFDLHlDQUFPLFNBQVIsQUFBaUIsU0FBUyxTQUExQjtzQkFBQTt3QkFBQTtBQUFBO09BNUJaLEFBQ0ksQUFPSSxBQW9CSSxBQUlmO0FBakVEOztBQW1FQSxXQUFBLEFBQVcsOEJBQVg7eUZBQTZCLGtCQUFBLEFBQU8sT0FBUDtZQUFBO3dFQUFBO3NCQUFBO21EQUFBO3lCQUNsQjtBQURrQixrQ0FDUCxNQURPLEFBQ0QsTUFEQyxBQUNsQjs7cUNBRGtCLEFBR2xCO0FBQUEsQUFDSDs7eUJBSnFCO3lCQUFBO3lDQUFBOztBQUFBO3FCQUFBO0FBQTdCOzswQkFBQTtpQ0FBQTtBQUFBO0FBUUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9pdmFuL2tpY2tzdGFydCJ9