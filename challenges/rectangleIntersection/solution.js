function rectangleIntersection(rect1, rect2) {
    let leftX = Math.max(rect1.leftX, rect2.leftX);
    let rightX = Math.min(rect1.leftX + rect1.width, rect2.leftX + rect2.width);
 
    console.log(leftX, rightX);
    rect1.rightX = rect1.leftX + rect1.width;
    rect2.rightX = rect2.leftX + rect2.width;

    rect1.topY = rect1.bottomY + rect1.height;
    rect2.topY = rect2.bottomY + rect2.height;
    
    // A intersects B
    if ( (rect2.leftX > rect1.leftX) === (rect1.rightX < rect2.rightX) ) {
        if ( (rect2.bottomY > rect1.bottomY) === (rect1.topY < rect2.topY) ) {
            // return (rect1.rightX - rect2.leftX) * (rect1.topY - rect2.bottomY);
            // return (rect2.rightX - rect1.leftX) * (rect2.topY - rect1.bottomY);
        }
    }

    // B completely in A
    if ( !(rect2.leftX > rect1.leftX) && !(rect1.rightX < rect2.rightX) ) {
        if ( !(rect2.bottomY > rect1.bottomY) && !(rect1.topY < rect2.topY) ) {
            return (rect2.rightX - rect1.leftX) * (rect2.topY - rect1.bottomY);
        }
    }

    
    return false;
}

let rectA = { 
    leftX: 1, 
    bottomY: 1, 
    width: 10, 
    height: 10
};

let rectB = { 
    leftX: 2, 
    bottomY: 2, 
    width: 2, 
    height: 2
};

console.log(rectangleIntersection(rectB, rectA));