'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (process.browser) {
    window.ethereum.enable();
    var currProvider = window.web3.currentProvider;
    web3 = new _web2.default(currProvider);
} else {
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/e2d17a5fc2724a98b9aa215fbb380a69');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJwcm9jZXNzIiwiYnJvd3NlciIsIndpbmRvdyIsImV0aGVyZXVtIiwiZW5hYmxlIiwiY3VyclByb3ZpZGVyIiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQUksUUFBUSxBQUFaLFNBQXFCLEFBQ2pCO1dBQU8sQUFBUCxTQUFnQixBQUFoQixBQUNBO1FBQU0sZUFBZSxPQUFPLEFBQVAsS0FBWSxBQUFqQyxBQUNBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNIO0FBSkQsT0FLSyxBQUNEO1FBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2IsQUFEYSxBQUFqQixBQUdBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNIO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaXZhbi9raWNrc3RhcnQifQ==