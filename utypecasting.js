function UToFloat(arg){
    //'arg' stands for argument
    //'argument' allias name is parameter 
    //'arg' formal parameter has string datatype values
    //'rfv' stands for return float value
    var rfv=parseFloat(arg);
    rfv=isNaN(rfv) ? 0 : rfv;
    return rfv;
}

function UToint(arg){
    //'riv' stands for return integer value 
    var riv=parseInt(arg);
    riv=isNaN(riv) ? 0 : riv;
    return riv;
}