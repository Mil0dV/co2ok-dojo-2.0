from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def profile(request):
    context = {

    }
    return render(request, 'dashboard/profile.html', context)
