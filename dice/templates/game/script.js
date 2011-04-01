var game_guid = '';

function start_game() {
    $.ajax({
        'url': '/game/start/',
        'async': false,
        'success': function(guid) {
            game_guid = guid;
        }
    });
    clear_actions();
    clear_goals();
    next_round();
}

function next_round() {
    reset_actions();
    reset_dice();
    post_roll();
}

{% include 'game/keys.js' %}
{% include 'game/dice.js' %}

{% include 'action/actions.js' %}
{% include 'goal/goals.js' %}
