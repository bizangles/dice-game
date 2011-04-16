function roll() {
    num = $('#dice_unlocked .die').size();
    numLocked = $('#dice_unlocked .die_locked, #dice_unlocked .die_unrolled').size();
    numRolled = $('#dice_unlocked :not(.die_unrolled)').size();

    if (numRolled > 0 && numLocked <= 0) {
        // TODO - alert of some sort?
    } else if (num) {
        url = '/game/'+game_guid+'/roll/'+num+'/';

        $.getJSON(url, function(data) {
            clear_unlocked_dice();
            $.each(data['dice'], function(i, die_data) {
                die = create_die(die_data);
                add_die(die);
            });
        });
        post_roll();
    }
    else {
        next_round();
    }
}

function post_roll() {
    goal_post_roll();
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
    // If a 0 is sent, die will not be lockable or have any value
    if (die_data) {
        die.addClass('die_'+die_data);
        die.attr('die_number', die_data);
        die.click(toggle_unlocked_die);
    } else {
        die.addClass('die_unrolled');
    }
    return die;
}

function add_die(die) {
    $('#dice_unlocked').append(die);
    post_roll();
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
    $('#dice_locked .die, #dice_unlocked .die[die_number]').each(function() {
        dice.push($(this).attr('die_number'));
    });
    return dice;
}

function reset_dice() {
    clear_unlocked_dice();
    clear_locked_dice();
    add_dice([0,0,0]);
}
