function rectangleIntersection(rect1, rect2) {
    
    let leftX = Math.max(rect1.leftX, rect2.leftX);
    let rightX = Math.min(rect1.leftX + rect1.width, rect2.leftX + rect2.width);
 
    let bottomY = Math.max(rect1.bottomY, rect2.bottomY);
    let topY = Math.min(rect1.bottomY + rect1.height, rect2.bottomY + rect2.height);

    let width = rightX - leftX;
    let height = topY - bottomY; 

    if (width > 0 && height > 0) {
        return width * height;
    } 
    
    return false;

}