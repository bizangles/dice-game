var action_{{action.name}} = new action('{{action.name}}');

action_{{action.name}}.do_action = function() {
    add_dice([0]);
    action_dialog('{{action.name}}');
}

action_{{action.name}}.dialog = true
