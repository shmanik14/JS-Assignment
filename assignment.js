// Convert Kilometer to Meter
function kilometerToMeter(kilometer){
    if(kilometer <= -1){
        return 'Distance cannot be negative';
    }else{
        return kilometer*1000;
    }
}
var kmresult = kilometerToMeter(5);
console.log(kmresult);

// Budget Calculator
function budgetCalculator(watch, mobile, laptop){
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Invalid input";
    } 
    else{
        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var loptopPrice = laptop * 500;
        return watchPrice + mobilePrice + loptopPrice;
    }
}
var vcresult = budgetCalculator(5, 10, 5);
console.log(vcresult);

// Calculate Hotel Cost
function hotelCost(days){
    if(days > 0 && days <= 10){
        var rent = 100 * days;
        return rent;
    }else if(days >= 11 && days <= 20){
        var rent = 10 * 100 + (days - 10) * 80;
        return rent;
    }else if(days >= 20){
        var rent = 10 * 100 + 10 * 80 + (days - 20) * 50;
        return rent;
    }
    else{
        return 'Invalid Input';
    }
}
var hcresult = hotelCost(40);
console.log(hcresult);

// Find Longest string from Array
function megaFriend(friend) {       
    var friendLength = 0;
    var mega;
    for(var i = 0; i< friend.length; i++){
        if(friend[i].length > friendLength){
            friendLength = friend[i].length;
            mega = friend[i];
        }           
    }   
    return mega;    
}
var fri = ['salam', 'borkot', 'jobbor', 'rafique', 'sahadat'];
console.log(megaFriend(fri));
