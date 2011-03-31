function roll() {
    num = $('#dice_unlocked .die').size();
    clear_unlocked_dice();

    url = '/game/'+game_guid+'/roll/'
    if (num) { url += num+'/'; }
    else { next_round(); }

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

function add_dice(dice) {
    $.each(dice, function(i, die) {
        add_die(create_die(die));
    });
}

function toggle_unlocked_die() {
    $(this).toggleClass('die_locked');
}

function get_all_dice() {
    dice = [];
    $('#dice_locked .die, #dice_unlocked .die').each(function() {
        dice.push($(this).html());
    });
    return dice;
}

function reset_dice() {
    clear_unlocked_dice();
    clear_locked_dice();
}
