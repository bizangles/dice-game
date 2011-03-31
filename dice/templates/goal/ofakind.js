function goal_ofakind(tuple) {
    this.inheritFrom = goal;
    this.inheritFrom();

    this.tuple = tuple;
}

goal_ofakind.prototype.is_purchasable = function(dice) {
    var this_goal = this;
    var purchasable = false;
    var counts = {1:0,2:0,3:0,4:0,5:0,6:0};
    $.each(dice, function(i, die) {
        if (die) {
            counts[die]++;
            if (counts[die] >= this_goal.tuple) {
                purchasable = true;
                return false;
            }
        }
    });
    return purchasable;
}
