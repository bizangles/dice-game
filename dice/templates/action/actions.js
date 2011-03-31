function action(name) {
    this.name = name;
}

function not_defined() {
    alert("this function is not defined");
    return false;
}

action.do_action = not_defined;

{% for action in actions %}
    {% include action.template %}
{% endfor %}

function perform_action() {
    var action_div = this;
    if (!$(action_div).hasClass('action_used')) {
        goals[action_div.id].action.do_action();
        $(action_div).addClass('action_used');
    }
}

function reset_actions() {
    $('#actions_container .goal').removeClass('action_used');
}
