var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import ComponentBase from 'src/componentBase';
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert(_a) {
        var showtime = _a.showtime, parent = _a.parent;
        var _this = _super.call(this, { parent: parent }) || this;
        _this.showTime = showtime * 1000;
        _this.showing = false;
        _this.message = '';
        return _this;
    }
    Alert.prototype.showError = function (message) {
        this.message = message;
        this.show();
        setTimeout(this.hide, this.showTime);
    };
    Alert.prototype.showSuccess = function (message) {
        this.message = message;
        this.show();
        setTimeout(this.hide, this.showTime);
    };
    Object.defineProperty(Alert.prototype, "message", {
        set: function (message) {
            this.message = message;
        },
        enumerable: false,
        configurable: true
    });
    Alert.prototype.toggle = function () {
        this.showing = !this.showing;
    };
    Alert.prototype.show = function () {
        this.showing = true;
    };
    Alert.prototype.hide = function () {
        this.showing = false;
    };
    return Alert;
}(ComponentBase));
export default Alert;
//# sourceMappingURL=index.js.map