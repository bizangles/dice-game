function goal(type) {
    this.type = type;
}

function not_defined() {
    alert("this function is not defined");
    return false;
}

goal.prototype.is_purchasable = not_defined;

{% for goal in goals %}
    {% include goal.template %}
{% endfor %}

function purchase_goal() {
    $(this).appendTo('#actions_container');
}
