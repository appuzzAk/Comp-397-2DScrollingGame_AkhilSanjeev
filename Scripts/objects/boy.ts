/**
 * C:\Users\Akhil Sanjeev\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\objects\.ts
 * Akhil Sanjeev - 300987699
 * Last Modified date :  04/04/2020
 * Program Desc : 2D scrolling game. 
 * 
 */
module objects {
    export class Boy extends objects.GameObject {
        // member variables

        // constructors
        constructor() {
            super("boy");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the right boundary
            if(this.x > (config.Screen.WIDTH - this.halfWidth)) {
         //       this.x = config.Screen.WIDTH - this.halfWidth;
            }

            // check the left boundary
            if(this.x < this.halfWidth) {
           //     this.x = this.halfWidth;
            }
        }

         // public methods
         public Start():void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 370;
            this.x = 100;
        }

        public Update():void {
            this.x = managers.Game.Stage.mouseX;
             this.Move();
            this._checkBounds();
        }

        public Reset():void {

        }
        public Move():void{
           if (managers.Game.keyboardManager.jump)
           {
               this.y= 270;
           }
           else 
           {
               this.y = 370;
           }
        }

    }
}