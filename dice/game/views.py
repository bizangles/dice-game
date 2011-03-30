from django.http import HttpResponse, Http404
from django.shortcuts import render_to_response

from dice.game import models

def play(request):
    goals = models.Goal.objects.all();
    return render_to_response('game/index.html', {
        'goals': goals,
    })

def script(request):
    goals = models.Goal.objects.all();
    actions = []
    for goal in goals:
        actions.append(goal.action)

    return render_to_response('game/script.js', {
            'goals': goals,
            'actions': actions,
        },
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

