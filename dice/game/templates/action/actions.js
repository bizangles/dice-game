function action(type) {
    this.type = type;
}

function not_defined() {
    alert("this function is not defined");
    return false;
}

action.do_action = not_defined;

{% for action in actions %}
    {% include action.template %}
{% endfor %}

function perform_action(goal_div) {
    goals[goal_div.id].action.do_action();
}
