import dice_dump

import csv
from dice.game import models

def wipe_tables():
    models.Action.objects.all().delete()
    models.Goal.objects.all().delete()

def import_actions():
    reader = csv.DictReader(open(dice_dump.ACTION_FILE, 'r'), dice_dump.ACTION_FIELDS)

    for row in reader:
        models.Action.objects.create(**row)

def import_goals():
    reader = csv.DictReader(open(dice_dump.GOAL_FILE, 'r'), dice_dump.GOAL_FIELDS)

    for row in reader:
        row['action'] = models.Action.objects.get(name=row['action'])
        models.Goal.objects.create(**row)

wipe_tables()
import_actions()
import_goals()
