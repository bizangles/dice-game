function roll() {
    num = $('#dice_unlocked .die').size();

    if (num) {
        // Do the roll
        url = '/game/'+game_guid+'/roll/'+num+'/';

        $.getJSON(url, function(data) {
            clear_unlocked_dice();
            $.each(data['dice'], function(i, die_data) {
                die = create_die(die_data);
                add_die(die);
            });
        });
    }
    else {
        next_round();
    }
}

function dice_updated() {
    update_roll_button();
    goal_post_roll();
}

function roll_is_allowed() {
    num = $('#dice_unlocked .die').size();
    numLocked = $('#dice_unlocked .die_locked').size();
    numRolled = $('#dice_unlocked :not(.die_unrolled)').size();

    return (num > 0 && (numRolled == 0 || numLocked > 0));
}

function lock() {
    $('.die_locked').appendTo('#dice_locked').unbind('click');
    dice_updated();
}

function update_roll_button() {
    if (roll_is_allowed()) {
        $('#roll_button').removeClass('button_disabled');
    } else {
        $('#roll_button').addClass('button_disabled');
        $('#roll_button').removeClass('button_hover');
    }
}

function lock_and_roll() {
    if (roll_is_allowed()) {
        lock();
        roll();
    } else {
        // TODO - alert of some sort?
    }
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
    dice_updated();
}

function add_dice(dice) {
    $.each(dice, function(i, die) {
        add_die(create_die(die));
    });
}

function toggle_unlocked_die() {
    $(this).toggleClass('die_locked');
    dice_updated();
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
