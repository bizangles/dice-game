import dice_dump

import csv, sys
from dice.game import models
from django.forms.models import model_to_dict

def dump_actions(file):
    writer = csv.DictWriter(file, dice_dump.ACTION_FIELDS, extrasaction='ignore')

    for action in models.Action.objects.all():
        writer.writerow(model_to_dict(action))

def dump_goals(file):
    writer = csv.DictWriter(file, dice_dump.GOAL_FIELDS, extrasaction='ignore')

    for goal in models.Goal.objects.all():
        data = model_to_dict(goal)
        data['action'] = goal.action.name
        writer.writerow(data)

#dump_actions(sys.stdout)
#dump_goals(sys.stdout)
dump_actions(open(dice_dump.ACTION_FILE, 'wb'))
dump_goals(open(dice_dump.GOAL_FILE, 'wb'))
