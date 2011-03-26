from django.shortcuts import render_to_response
# Create your views here.

def play(request):
    return render_to_response('game/index.html')

def script(request):
    return render_to_response('game/script.js',
        mimetype='text/javascript'
    )
