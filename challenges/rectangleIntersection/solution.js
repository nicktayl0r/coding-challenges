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

let rectangle1 = {
    leftX: 1, 
    bottomY: 1, 
    width: 6,
    height: 6

};

let rectangle2 = {
    leftX: 2, 
    bottomY: 2, 
    width: 2,
    height: 2
};

let rectangle3 = {
    leftX: 4, 
    bottomY: 5, 
    width: 4,
    height: 3
};

console.log(rectangleIntersection(rectangle1, rectangle2));
console.log(rectangleIntersection(rectangle2, rectangle1));
console.log(rectangleIntersection(rectangle1, rectangle3));
console.log(rectangleIntersection(rectangle3, rectangle1));
console.log(rectangleIntersection(rectangle2, rectangle3));
console.log(rectangleIntersection(rectangle3, rectangle2));