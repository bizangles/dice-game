$(document).keydown(function(e) {
	// space
	if (e.keyCode == 32) {
		lock_and_roll();
	}

	//0-9
	else if (e.keyCode >= 48 && e.keyCode <= 57) {
		num = e.keyCode - 48;
		if (num == 0) {
			num += 10;
		}
		$('#dice_unlocked .die').eq(num-1).click();
	}

	$('#key').html(e.keyCode);
});
