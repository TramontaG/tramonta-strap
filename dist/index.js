var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("src/helpers/idHelper", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createRandomId = void 0;
    var createRandomId = function () {
        var randomNumber = (Math.random() * 1000000).toString();
        var now = new Date().getTime().toString();
        return (randomNumber + now)
            .split('')
            .map(function (char) {
            return Math.random() > 0.5
                ? String.fromCharCode(char.charCodeAt(0) ^ Math.round(Math.random() * 100))
                : '';
        })
            .join('');
    };
    exports.createRandomId = createRandomId;
});
define("src/helpers/index", ["require", "exports", "src/helpers/idHelper"], function (require, exports, idHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(idHelper_1, exports);
});
define("src/componentBase/models", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/componentBase/index", ["require", "exports", "src/helpers/index"], function (require, exports, helpers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentBase = /** @class */ (function () {
        function ComponentBase(_a) {
            var parent = _a.parent;
            this.id = (0, helpers_1.createRandomId)();
            //DOM manipulation
            this.parent = parent || document.body;
            this.node = document.createElement('div');
            this.node.id = this.id;
            this.parent.appendChild(this.node);
        }
        ComponentBase.prototype.delete = function () {
            this.parent.removeChild(this.node);
        };
        return ComponentBase;
    }());
    exports.default = ComponentBase;
});
define("src/components/Alert/models", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/components/Alert/index", ["require", "exports", "src/componentBase/index"], function (require, exports, componentBase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    componentBase_1 = __importDefault(componentBase_1);
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
    }(componentBase_1.default));
    exports.default = Alert;
});
define("src/components/index", ["require", "exports", "src/components/Alert/index"], function (require, exports, Alert_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(Alert_1, exports);
});
define("index", ["require", "exports", "src/components/index"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(components_1, exports);
});
//# sourceMappingURL=index.js.map