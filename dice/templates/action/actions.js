function action(name) {
    this.name = name;
}

function not_defined() {
    alert("this function is not defined");
    return false;
}

action.do_action = not_defined;

action.post_action = function() {
    turn_event({
        'type': 'action',
        'id': this.name,
        'data': this.last_use_data,
    });
}

actions = {}

{% for goal in goals %}
    {% with goal.action as action %}
        {% include action.template %}
        actions['action_{{action.name}}'] = action_{{action.name}};
    {% endwith %}
{% endfor %}

function perform_action() {
    var action_div = this;
    if ($(action_div).hasClass('action_purchased') && !$(action_div).hasClass('action_used')) {
        action_result = actions[action_div.id].do_action();
//        actions[action_div.id].post_action();
        $(action_div).addClass('action_used');
    }
}

function reset_actions() {
    $('.goal_box .action').removeClass('action_used');
}

function clear_actions() {
    $('.goal_box .action').removeClass('action_used action_purchased');
}
