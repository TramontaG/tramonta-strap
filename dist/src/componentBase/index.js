import { createRandomId } from 'src/helpers';
var ComponentBase = /** @class */ (function () {
    function ComponentBase(_a) {
        var parent = _a.parent;
        this.id = createRandomId();
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
export default ComponentBase;
//# sourceMappingURL=index.js.map