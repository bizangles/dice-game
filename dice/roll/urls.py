from django.conf.urls.defaults import *

urlpatterns = patterns('dice.roll.views',
    (r'^get/$', 'get_roll'),
)
