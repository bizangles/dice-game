function action(name) {
    this.name = name;
}

function not_defined() {
    alert("this function is not defined");
    return false;
}

action.prototype.do_action = not_defined;
action.prototype.dialog = false;

action.prototype.post_action = function() {
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
        if (actions[action_div.id].dialog) {
            action_dialog(actions[action_div.id].name);
        }
        else {
            reset_keymode();
        }
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

function action_dialog(action_name) {
    $('#action-' + action_name + '-dialog').dialog({
        width: 400,
        resizable: false,
        draggable: false,
        modal: true,
        open: function(e, ui) {
            set_keymode('dialog');
        },
        close: function(e, ui) {
            reset_keymode();
        },
    });
}
