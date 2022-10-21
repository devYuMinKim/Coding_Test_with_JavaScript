function solution(A) {
    var total = A.length;
    var answer = 0;
    var tick =0;
    var queue=[];

    while(true){
        var index = 0;
        while(true){
            if(index >= A.length) break;
            if(A[index][0] <= tick){
                queue.push(A.splice(index,1)[0]);
            }else{
                index++;
            }
        }

        if(queue.length===0) {
             if (A.length ===0) {
                 break;
             } else {
                tick++;
             }
        } else {
        var minIndex = 0;
        for(var i = 1 ; i < queue.length ; i++){
            if(queue[minIndex][1] > queue[i][1]) minIndex=i
        }
        tick += queue[minIndex][1];
        answer += tick - queue[minIndex][0];
        queue.splice(minIndex,1);

        }
    }

    return Math.floor(answer/total);
}