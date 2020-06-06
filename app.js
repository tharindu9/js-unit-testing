class Cal {
    sayHello(){
        return 'hello';
    }

    addNum(num1 , num2) {
        return num1 + num2;
    }

    subNum(num1 , num2){
        if(num1 > num2){
            return num1 - num2;
        }
        else{
            return num2 - num1;
        }
    }

    mulNum(num1, num2){
        return num1*num2;
    }

    devNum(num1,num2){
        return num1/num2;
    }

    calOparations(num1 , num2 , oparation){
        if (oparation === 'add') {
            this.addNum(num1 , num2)
        }
        else if (oparation === 'sub'){
            subNum(num1,num2)
        }
        else if (oparation === 'mul'){
            mulNum(num1,num2)
        }
        else {
            devNum(num1 , num2)
        }
    }

}
module.exports = Cal;




