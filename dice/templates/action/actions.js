function action(name) {
    this.name = name;
}

function not_defined() {
    alert("this function is not defined");
    return false;
}

action.do_action = not_defined;

actions = {}

{% for action in actions %}
    {% include action.template %}
    actions['action_{{action.name}}'] = action_{{action.name}};
{% endfor %}

function perform_action() {
    var action_div = this;
    if (!$(action_div).hasClass('action_used')) {
        actions[action_div.id].do_action();
        $(action_div).addClass('action_used');
    }
}

function reset_actions() {
    $('#actions .action').removeClass('action_used');
}

function clear_actions() {
    $('#actions .action').removeClass('action_used purchased');
}
