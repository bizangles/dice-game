goal_{{goal.name}} = new goal();

goal_{{goal.name}}.is_purchasable = function(dice) {
    var purchasable = false;
    var counts = {1:0,2:0,3:0,4:0,5:0,6:0};
    $.each(dice, function(i, die) {
        if (die) { counts[die]++; }
    });
    if (counts[3] && counts[4] &&
            ((counts[1] && counts[2])
             || (counts[2] && counts[5])
             || (counts[5] && counts[6]))) {
        return true;
    }
    return false;
}

