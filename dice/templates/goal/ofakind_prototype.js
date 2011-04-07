function goal_ofakind(tuples) {
    this.inheritFrom = goal;
    this.inheritFrom();

    if (typeof(tuples) == 'number') {
        this.tuples = [tuples];
    }
    else {
        this.tuples = tuples.sort(function(a,b) { return b-a; });
    }
}

goal_ofakind.prototype.is_purchasable = function(dice) {
    var this_goal = this;
    var counts = {1:0,2:0,3:0,4:0,5:0,6:0};
    $.each(dice, function(i, die) {
        if (die) {
            counts[die]++;
        }
    });
    var purchasable = true;
    $.each(this_goal.tuples, function(i, tuple) {
        for (var die in counts) {
            if (counts[die] >= tuple) {
                counts[die] -= tuple;
                return true;
            }
        }
        purchasable = false;
        return false;
    });

    return purchasable;
}
