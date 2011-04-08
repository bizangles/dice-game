var nummode = 'dice';

$(document).keydown(function(e) {
	// space
	if (e.keyCode == 32) {
		lock_and_roll();
	}

    //A
    else if (e.keyCode == 65) {
        nummode = 'actions';
    }

    //D
    else if (e.keyCode == 68) {
        nummode = 'dice';
    }

    //G
    else if (e.keyCode == 71) {
        nummode = 'goals';
    }

	//0-9
	else if (e.keyCode >= 48 && e.keyCode <= 57) {
		num = e.keyCode - 48;
		if (num == 0) {
			num += 10;
		}

        if (nummode == 'dice') {
            $('#dice_unlocked .die').eq(num-1).click();
        }
        else if (nummode == 'actions') {
            $('.goal_box .action').eq(num-1).click();
            nummode = 'dice';
        }
        else if (nummode == 'goals') {
            $('.goal_box .goal').eq(num-1).click();
            nummode = 'dice';
        }
	}

	$('#key').html(e.keyCode + ' ' + nummode);
});
