import sys
import os

SCRIPT_DIR = os.path.dirname(os.path.realpath(__file__))
PROJECT_PARENT_DIR = os.path.realpath(os.path.join(SCRIPT_DIR, '..', '..'))

sys.path.append(PROJECT_PARENT_DIR)

ACTION_FILE = os.path.join(SCRIPT_DIR, 'actions.csv')
GOAL_FILE = os.path.join(SCRIPT_DIR, 'goals.csv')

from django.core.management import setup_environ
from dice import settings

setup_environ(settings)

ACTION_FIELDS = ['name', 'template', 'dialog']
GOAL_FIELDS = ['name', 'template', 'js_args', 'action']
