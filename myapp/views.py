from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.core.mail import send_mail
import json
import os
from datetime import datetime

##### Pages #####

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request,'about.html')

def brands(request):
    return render(request,'brands.html')

def packing(request):
    return render(request,'packing.html')

def contact(request):
    return render(request,'contact.html')

##### Products #####

def ready_to_eat(request):
    return render(request,'products/ready-to-eat.html')

def whole_spices(request):
    return render(request,'products/whole-spices.html')

def ground_spices(request):
    return render(request,'products/ground-spices.html')

def flour_and_millets(request):
    return render(request,'products/flour-and-millets.html')

def beans_pulses_lentils(request):
    return render(request,'products/beans-pluses-lentils.html')

def our_speciality(request):
    return render(request,'products/our-speciality.html')

def pickles_chutney(request):
    return render(request,'products/pickles-chutney.html')

def ready_paste(request):
    return render(request,'products/ready-paste.html')

def papad_khakhra(request):
    return render(request,'products/papad-khakhra.html')

def dry_fruits(request):
    return render(request,'products/dry-fruits.html')

def cookies(request):
    return render(request,'products/cookies.html')

def pooja_samagri(request):
    return render(request,'products/pooja-samagri.html')

def agarbatti(request):
    return render(request,'products/agarbatti.html')

def dhoop_stick(request):
    return render(request,'products/dhoop-stick.html')

def makhana_chana_peanuts(request):
    return render(request,'products/makhana-chana-peanuts.html')

def mukhavas(request):
    return render(request,'products/mukhavas.html')


# def not_found(request, unknown=None):
#     return render(request, '404.html')

from django.http import JsonResponse
from django.core.mail import EmailMessage

def send_contact_email(request):
    if request.method == "POST":

        name = request.POST.get("name")
        company = request.POST.get("company")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        category = request.POST.get("product_category")
        message = request.POST.get("message")

        subject = f"New Contact Enquiry - {name}"

        body = f"""
<html>
<body style="font-family: Arial, sans-serif;">
    <h2 style="color: #2c3e50;">New Enquiry From - {name}</h2>
    <hr/>
    <table>
        <tr><td><b>Name</b></td><td>&nbsp;:&nbsp;</td><td>{name}</td></tr>
        <tr><td><b>Company</b></td><td>&nbsp;:&nbsp;</td><td>{company}</td></tr>
        <tr><td><b>Email</b></td><td>&nbsp;:&nbsp;</td><td>{email}</td></tr>
        <tr><td><b>Phone</b></td><td>&nbsp;:&nbsp;</td><td>{phone}</td></tr>
        <tr><td><b>Category</b></td><td>&nbsp;:&nbsp;</td><td>{category}</td></tr>
    </table>
    <hr/>
    <p><b>Message:</b></p>
    <p>{message}</p>
</body>
</html>
        """

        try:
            email_msg = EmailMessage(
                subject,
                body,
                'SENDER MAIL',
                ['RECIVER MAIL'],
            )
            email_msg.content_subtype = 'html'  # HTML email
            email_msg.send()

            return JsonResponse({"success": True})

        except Exception as e:
            return JsonResponse({
                "success": False,
                "message": str(e)
            })

    return JsonResponse({"success": False})