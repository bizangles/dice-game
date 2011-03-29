function goal(type) {
    this.type = type;
}

goal.prototype.is_purchasable = function(dice) {
    alert("is_purchasable() is not defined");
    return false;
}

{% for goal in goals %}
    {% include goal.template %}
{% endfor %}
