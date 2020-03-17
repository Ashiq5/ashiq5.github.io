from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^resume/$', views.resume, name='resume'),
    url(r'^publications/$', views.publications, name='publications'),
    url(r'^about/$', views.about, name='about'),
]