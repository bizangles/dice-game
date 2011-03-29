var pair = new goal();

pair.is_purchasable = function(dice) {
    purchasable = false;
    counts = {1:0,2:0,3:0,4:0,5:0,6:0};
    $.each(dice, function(i, die) {
        counts[die]++;
        if (counts[die] > 1) {
            purchasable = true;
            return false;
        }
    });
    return purchasable;
}

pair.action = {{ goal.action.name }}
