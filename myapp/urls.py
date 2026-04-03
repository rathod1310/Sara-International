from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
    path('products/ready-to-eat/', views.ready_to_eat, name='ready_to_eat'),
    path('products/whole-spices/', views.whole_spices, name='whole_spices'),
    path('products/ground-spices/', views.ground_spices, name='ground_spices'),
    path('products/flour-and-millets/', views.flour_and_millets, name='flour_and_millets'),
    path('products/beans-pulses-lentils/', views.beans_pulses_lentils, name='beans_pulses_lentils'),
    path('products/our-speciality/', views.our_speciality, name='our_speciality'),
    path('products/pickles-chutney-ready-paste/', views.pickles_chutney_ready_paste, name='pickles_chutney_ready_paste'),
    path('products/papad-khakhra/', views.papad_khakhra, name='papad_khakhra'),
    path('products/dry-fruits/', views.dry_fruits, name='dry_fruits'),
    path('products/cookies/', views.cookies, name='cookies'),
    path('products/pooja-samagri/', views.pooja_samagri, name='pooja_samagri'),
    path('products/agarbatti_dhoop/', views.agarbatti_dhoop, name='agarbatti_dhoop'),
    path('products/chana-peanuts/', views.chana_peanuts, name='chana_peanuts'),
    path('products/namkeen/', views.namkeen, name='namkeen'),
    path('products/mukhavas/', views.mukhavas, name='mukhavas'),
    path('brands', views.brands, name='brands'),
    path('contact', views.contact, name='contact'),
    path("send-contact-email/", views.send_contact_email, name="send_contact_email"),
    path('packing', views.packing, name='packing'),
    # path('products/dhoop-stick/', views.dhoop_stick, name='dhoop_stick'),
    # path('not_found', views.not_found, name='not_found'),
    # path('<path:unknown>', views.not_found, name='not_found'),

]