// 6-0 数组转对象
export const arrayToObject = ( array, key ) => {
    let reuslt = {}, cur;
    if( array.length && array[0][key] ){    
        for ( cur of array  ){
            reuslt[cur.id] = cur;
        }
    }
    return reuslt;
}

// 6-1 对象转数组
export const objectToArray = ( obj ) => {
    if( obj ){
        const strKey = Object.keys(obj);
        return strKey.length ? strKey.map( cur => obj[cur] ) : []
    }
    return [];
}