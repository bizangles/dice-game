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

function roll() {
	num = $('#dice_unlocked .die').size();
	clear_unlocked_dice();

    url = '/game/'+game_guid+'/roll/'
    if (num) { url += num+'/'; }
    else { clear_locked_dice() }

	$.getJSON(url, function(data) {
		$.each(data['dice'], function(i, die_data) {
			die = create_die(die_data);
			add_die(die);
		});
	});
}

function lock() {
	$('.die_locked').appendTo('#dice_locked').unbind('click');
}

function lock_and_roll() {
	lock();
	roll();
}

function clear_unlocked_dice() {
	$('#dice_unlocked').html('');
}

function clear_locked_dice() {
	$('#dice_locked').html('');
}

function create_die(die_data) {
	die = $('<div/>');
	die.addClass('die');
	die.addClass('die_'+die_data);
	die.html(die_data);
	die.click(toggle_unlocked_die);
	return die;
}

function add_die(die) {
	$('#dice_unlocked').append(die);
}

function toggle_unlocked_die() {
	$(this).toggleClass('die_locked');
}

{% include 'game/keys.js' %}
