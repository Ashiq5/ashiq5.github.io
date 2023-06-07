from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^resume/$', views.index, name='resume'),
    url(r'^publications/$', views.index, name='publications'),
    url(r'^about/$', views.index, name='about'),
]