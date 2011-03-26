from django.conf.urls.defaults import *

urlpatterns = patterns('dice.game.views',
    (r'^script.js$', 'script'),
)
