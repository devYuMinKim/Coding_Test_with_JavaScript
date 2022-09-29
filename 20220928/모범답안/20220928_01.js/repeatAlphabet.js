function solution(S)
{
    var arr = [];

    for(var i = 0; i < S.length; i++){
        if(arr[arr.length - 1] == S[i]){
            arr.pop();
            continue;
        }

        arr.push(S[i]);
    }

    if(arr.length == 0){
        return 1;
    }

    return 0;
}
