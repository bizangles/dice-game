var game_guid = '';

function start_game() {
    $.ajax({
        'url': '/game/start/',
        'async': false,
        'success': function(guid) {
            game_guid = guid;
        }
    });
}

{% include 'game/keys.js' %}

{% include 'game/dice.js' %}

{% include 'goal/goals.js' %}
{% include 'action/actions.js' %}
