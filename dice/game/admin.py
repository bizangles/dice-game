from django.contrib import admin
from dice.game import models

class GameAdmin(admin.ModelAdmin):
    pass
admin.site.register(models.Game, GameAdmin)

class RollAdmin(admin.ModelAdmin):
    pass
admin.site.register(models.Roll, RollAdmin)

class GoalAdmin(admin.ModelAdmin):
    pass
admin.site.register(models.Goal, GoalAdmin)

class ActionAdmin(admin.ModelAdmin):
    pass
admin.site.register(models.Action, ActionAdmin)
