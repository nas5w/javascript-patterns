module.exports=function linearsearch(list,itemToFind){  
    var check=0;
    var i=0;
    for(i=0;i<list.length;i++){
        if(list[i]===itemToFind){
            check=1;
            break;
        }
    }
    if(check==0){
        return false;
    }
    else{   
        return true;

    }


}
