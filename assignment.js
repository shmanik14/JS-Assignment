function kilometerToMeter(kilometer){
    return kilometer*1000
}
var kmresult = kilometerToMeter(2.7);
console.log(kmresult, 'Meter');

function budgetCalculator(watch, mobile, laptop){
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var loptopPrice = laptop * 500;
    return watchPrice + mobilePrice + loptopPrice;
}
var vcresult = budgetCalculator(5, 5, 5);
console.log(vcresult);

function hotelCost(days){
    if(days <= 10){
        var rent = 100 * 10;
        return rent;
    }else if(days <= 20){
        var rent = 10 * 100 + (days - 10) * 80;
        return rent;
    }else{
        var rent = 10 * 100 + 10 * 80 + (days - 20) * 60;
        return rent;
    }
}
var hcresult = hotelCost(5);
console.log(hcresult);

function megaFriend(friend) {       
    var megafriend = 0;
    var mega;
    for(var i = 0; i< friend.length; i++){
        if(friend[i].length > megafriend){
            megafriend = friend[i].length;
            mega = friend[i];
        }           
    }   
    return mega;    
}
var fri = ['salam', 'borkot', 'jobbor', 'rafique'];
console.log(megaFriend(fri));
