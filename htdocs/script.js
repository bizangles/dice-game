function roll() {
	num = $('#dice_unlocked .die').size();
	clear_unlocked_dice();

	if (num == 0) {
		num = 20;
		clear_locked_dice();
	}

	data = {
		"dice": []
	};

	for (var i=1; i<=num; i++) {
		data['dice'].push(i);
	}


//	$.getJSON('roll.json', function(data) {
		$.each(data['dice'], function(i, die_data) {
			die = create_die(die_data);
			add_die(die);
		});
//	});
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

