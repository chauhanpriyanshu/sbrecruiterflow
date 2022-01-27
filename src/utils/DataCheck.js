export function checkIfExist(key,obj){
    if(key in obj){
        return true
    }
    else{
        return false
    }
}

export function checkIfNull(obj){
    if(obj===null){
        return true
    }
    else{
        return false
    }
}
