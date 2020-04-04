var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * C:\Users\Akhil Sanjeev\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\objects\boy.ts
 * Akhil Sanjeev - 300987699
 * Last Modified date :  04/04/2020
 * Program Desc : 2D scrolling game.
 *
 */
var objects;
(function (objects) {
    var Boy = /** @class */ (function (_super) {
        __extends(Boy, _super);
        // member variables
        // constructors
        function Boy() {
            var _this = _super.call(this, "boy") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Boy.prototype._checkBounds = function () {
            // check the right boundary
            if (this.x > (config.Screen.WIDTH - this.halfWidth)) {
                //       this.x = config.Screen.WIDTH - this.halfWidth;
            }
            // check the left boundary
            if (this.x < this.halfWidth) {
                //     this.x = this.halfWidth;
            }
        };
        // public methods
        Boy.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 370;
            this.x = 100;
        };
        Boy.prototype.Update = function () {
            this.x = managers.Game.Stage.mouseX;
            this.Move();
            this._checkBounds();
        };
        Boy.prototype.Reset = function () {
        };
        Boy.prototype.Move = function () {
            if (managers.Game.keyboardManager.jump) {
                this.y = 270;
            }
            else {
                this.y = 370;
            }
        };
        return Boy;
    }(objects.GameObject));
    objects.Boy = Boy;
})(objects || (objects = {}));
//# sourceMappingURL=boy.js.map