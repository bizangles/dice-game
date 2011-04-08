function goal(type) {
    this.type = type;
}

function not_defined() {
    alert("this function is not defined");
    return false;
}

goal.prototype.is_purchasable = not_defined;
goals = {};

{% include 'goal/ofakind_prototype.js' %}
{% include 'goal/straight_prototype.js' %}

{% for goal in goals %}
    {% include goal.template %}
    goal_{{goal.name}}.action = action_{{ goal.action.name }}
    goals['goal_{{goal.name}}'] = goal_{{goal.name}};
{% endfor %}

function purchase_goal() {
    var goal_div = this;
    var dice = get_all_dice();
    if (!$(goal_div).hasClass('goal_purchased') && goals[goal_div.id].is_purchasable(dice)) {
        $(goal_div).removeClass('goal_purchasable').addClass('goal_purchased');
        $('#action_'+goals[goal_div.id].action.name).addClass('action_purchased');
        next_round();
    }
}

function goal_post_roll() {
    $('.goal_box .goal:not(.goal_purchased)').each(function(i, goal_div) {
        if (goals[goal_div.id].is_purchasable(get_all_dice())) {
            $(goal_div).addClass('goal_purchasable');
        }
        else {
            $(goal_div).removeClass('goal_purchasable');
        }
    });
}

function clear_goals() {
    $('.goal_box .goal').removeClass('goal_purchased');
}
