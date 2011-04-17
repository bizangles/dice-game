var keymode = 'dice';

var keymodes = {};

function register_keys(modes, keys) {
    for (var i=0; i<modes.length; i++) {
        if (!keymodes[modes[i]]) {
            keymodes[modes[i]] = {};
        }
        for (var keycode in keys) {
            keymodes[modes[i]][keycode] = keys[keycode];
        }
    }
}

function perform_keypress(mode, keycode) {
    if (keymodes[mode]) {
	    if (keymodes[mode]['num']
                && keycode >= 48 && keycode <= 57) {
            var num = keycode - 48;
            if (num == 0) {
                num += 10;
            }
            keymodes[mode]['num'](num)
        }
        if (keymodes[mode][keycode]) {
            keymodes[mode][keycode]();
        }
    }
}

function set_keymode(mode) {
    keymode = mode;
}

function reset_keymode() {
    keymode = 'dice';
}

register_keys(['dice'], {
    32: function() {
        lock_and_roll();
    },
    num: function(num) {
        $('#dice_unlocked .die').eq(num-1).click();
    },
});

register_keys(['dice', 'actions', 'goals'], {
    65: function() {
        keymode = 'actions';
    },
    68: function() {
        keymode = 'dice';
    },
    71: function() {
        keymode = 'goals';
    },
});

register_keys(['actions'], {
    num: function(num) {
        $('.goal_box .action').eq(num-1).click();
    },
});

register_keys(['goals'], {
    num: function(num) {
        $('.goal_box .goal').eq(num-1).click();
        reset_keymode();
    },
});

$(document).keydown(function(e) {
    perform_keypress(keymode, e.keyCode);
    perform_keypress('global', e.keyCode);
	$('#key').html(e.keyCode + ' ' + keymode);
});

