from django.http import HttpResponse, Http404
from django.shortcuts import render_to_response

from dice.game import models

def play(request):
    return render_to_response('game/index.html')

def script(request):
    return render_to_response('game/script.js',
        mimetype='text/javascript'
    )

def start_game(request):
    game = models.Game()
    game.save()

    return HttpResponse(game.guid)

def roll(request, game_guid=None, num_dice=None):
    try:
        game = models.Game.objects.get(guid=game_guid)
    except models.Game.DoesNotExist:
        raise Http404('Game does not exist')

    (game_roll, new_roll) = models.Roll.objects.get_or_create(game=game)

    num_dice = int(num_dice) if num_dice else 3
    game_roll.roll(num_dice)

    return HttpResponse(game_roll.get_json())

