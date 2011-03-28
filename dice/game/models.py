import random
import uuid

from django.db import models
from django.utils import simplejson as json

class Game(models.Model):
    guid = models.CharField(max_length=32, primary_key=True)

    def __init__(self, *args, **kwargs):
        super(Game, self).__init__(*args, **kwargs)

        if not self.guid:
            self.guid = uuid.uuid1().hex

    def get_json(self):
        return json.dumps({'game': self.guid})


class Roll(models.Model):
    game = models.OneToOneField('Game')
    dice = models.CommaSeparatedIntegerField(max_length=100)
    guid = models.CharField(max_length=32)

    def __init__(self, *args, **kwargs):
        super(Roll, self).__init__(*args, **kwargs)

        if not self.guid:
            self.guid = uuid.uuid1().hex

    def __unicode__(self):
        return "%s" % self.dice

    def roll(self, num_dice):
        self.dice = [random.randint(1,6) for n in range(num_dice)]
        self.save()

    def get_json(self):
        return json.dumps({'dice': self.dice, 'guid': self.guid})
