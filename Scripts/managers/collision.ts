/**
 *C:\Users\Akhil Sanjeev\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\managers\collision.ts
 * Akhil Sanjeev - 300987699
 * Last Modified date :  04/04/2020
 * Program Desc : 2D scrolling game. 
 * 
 */
module managers {
    export class Collision {
        public static check(object1:objects.GameObject, object2:objects.GameObject) {
            let P1:math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2:math.Vec2 = new math.Vec2(object2.x, object2.y);
            
            if(math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if(!object2.isColliding) {
                    object2.isColliding = true;
                    switch(object2.name) {
                        case "star":
                        let starSound = createjs.Sound.play("starHit");
                        starSound.volume = 0.2;
                        managers.Game.scoreBoard.Score += 100;
                        break;

                        case "sweeper":
                        createjs.Sound.play("sweeperHit");
                        managers.Game.scoreBoard.Lives -= 1;
                        break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        }
    }
}