function goal(type) {
    this.type = type;
}

function not_defined() {
    alert("this function is not defined");
    return false;
}

goal.prototype.is_purchasable = not_defined;
goals = {};

{% include 'goal/ofakind.js' %}

{% for goal in goals %}
    {% include goal.template %}
    goals['{{goal.name}}'] = {{goal.name}};
{% endfor %}

function purchase_goal() {
    var goal_div = this;
    var dice = get_all_dice();
    if (goals[goal_div.id].is_purchasable(dice)) {
        $(goal_div).appendTo('#actions_container').unbind('click').click(perform_action);
        next_round();
    }
}
