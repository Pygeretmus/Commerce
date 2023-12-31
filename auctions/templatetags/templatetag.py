from django import template

register = template.Library()

@register.filter(name='ellipsis')
def elipsis(value):
    result = ""
    value = value.split("\n")
    if len(value) > 2:
        value = value[:2]
    for count, x in enumerate(value):
        if len(x) > 31 and count == 0:
            if len(x) > 62:
                x = x[:62] + "..."
            return x
        if len(x) > 31:
            result += x[:31] + "..."
        else:
            result += x
    return result