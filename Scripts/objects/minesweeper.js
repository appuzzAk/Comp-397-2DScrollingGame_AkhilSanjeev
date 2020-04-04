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
 * C:\Users\Akhil Sanjeev\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\objects\minesweeper.ts
 * Akhil Sanjeev - 300987699
 * Last Modified date :  04/04/2020
 * Program Desc : 2D scrolling game.
 *
 */
var objects;
(function (objects) {
    var Minesweeper = /** @class */ (function (_super) {
        __extends(Minesweeper, _super);
        /**
         * Creates an instance of Minesweeper.
         * @memberof Minesweeper
         */
        function Minesweeper() {
            var _this = _super.call(this, "sweeper") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Minesweeper.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
            }
        };
        // public methods
        Minesweeper.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        };
        Minesweeper.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._checkBounds();
        };
        Minesweeper.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 5) + 5); // between 5 and 10 ppf
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // between -2 and 2 ppf
            this.y = -this.height;
            this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
        };
        return Minesweeper;
    }(objects.GameObject));
    objects.Minesweeper = Minesweeper;
})(objects || (objects = {}));
//# sourceMappingURL=minesweeper.js.map