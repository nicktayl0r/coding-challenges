function Fountain(heights, fountains){
    if (heights.length !== fountains.length) {return 'bollocks'}
    let f = fountains.indexOf(1), flooded = [];
    flooded[f] = 1;
    for(let i = 0; i < heights.length; i++){
      if (heights[f+i] <= heights[f] && flooded[f+i-1]) {flooded[f+i] = 1}
      if (heights[f-i] <= heights[f] && flooded[f-i+1]) {flooded[f-i] = 1}
      if (flooded[i] === undefined){ flooded[i] = 0}
    }
    return flooded;
  }