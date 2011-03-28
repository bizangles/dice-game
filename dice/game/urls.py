from django.conf.urls.defaults import *

urlpatterns = patterns('dice.game.views',
    (r'^script.js$', 'script'),
    (r'^start/$', 'start_game'),
    (r'^(?P<game_guid>[a-f0-9]{32})/roll/((?P<num_dice>\d+)/)?$', 'roll'),
)
