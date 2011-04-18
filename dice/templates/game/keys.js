var default_keymode = 'game';
var keymode = default_keymode;
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
    keymode = default_keymode;
}

register_keys(['game'], {
    32: function() {
        lock_and_roll();
    },
    num: function(num) {
        $('#dice_unlocked .die').eq(num-1).click();
    },
});

var goal_keys = [
    81, 87, 69, 82, 84,
    65, 83, 68, 70, 71,
    90, 88, 67, 86, 66,
];

var goal_key_hash = {}
$.each(goal_keys, function(i, goal_key) {
    goal_key_hash[goal_key] = function() {
        $('.goal_box .action').eq(i).click();
    };
});

register_keys(['game'], goal_key_hash)

$(document).keydown(function(e) {
    perform_keypress(keymode, e.keyCode);
    perform_keypress('global', e.keyCode);
	$('#key').html(e.keyCode + ' ' + keymode);
});
