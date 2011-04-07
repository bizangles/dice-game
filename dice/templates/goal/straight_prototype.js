function straight(num_inarow) {
    this.inheritFrom = goal;
    this.inheritFrom();

    this.num_inarow = num_inarow;
}

straight.prototype.is_purchasable = function(dice) {
    var purchasable = false;
    var deduped = [];
    var last_die = 0;
    $.each(dice.sort(), function(i, die) {
        if (die != last_die) {
            deduped.push(die * 1);
            last_die = die;
        }
    });
    var inarow = 0;
    var max_inarow = 0;
    last_die = -1;
    $.each(deduped, function(i, die) {
        if (die == last_die + 1) {
            inarow++;
        }
        else {
            if (inarow > max_inarow) {
                max_inarow = inarow;
            }
            inarow = 1;
        }
        last_die = die;
    });
    if (inarow > max_inarow) {
        max_inarow = inarow;
    }

    return max_inarow >= this.num_inarow;
};
