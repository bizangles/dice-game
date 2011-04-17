from django.contrib import admin
from dice.game import models


class GameAdmin(admin.ModelAdmin):
    pass


class RollAdmin(admin.ModelAdmin):
    pass


class GoalAdmin(admin.ModelAdmin):
    list_display = ('__unicode__', 'name', 'template', 'js_args', 'action')
    list_editable = ('name', 'template', 'js_args', 'action')


class ActionAdmin(admin.ModelAdmin):
    list_display = ('__unicode__', 'name', 'template', 'dialog')
    list_editable = ('name', 'template', 'dialog')


admin.site.register(models.Game, GameAdmin)
admin.site.register(models.Roll, RollAdmin)
admin.site.register(models.Goal, GoalAdmin)
admin.site.register(models.Action, ActionAdmin)
