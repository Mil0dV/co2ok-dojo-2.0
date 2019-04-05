from django import forms
from django.contrib.auth.models import User
from django.utils.translation import pgettext, ugettext, ugettext_lazy as _

class Signup(forms.Form):
    userstatus_choice = (
        ('', _('Make a choice')),
        (_('user'), _('user')),
        (_('merchant'), _('Webshop Eigenaar')),
    )
    username = forms.CharField(max_length=255, widget= forms.TextInput(attrs={'placeholder':_('Username')}))
    email = forms.EmailField(widget= forms.TextInput(attrs={'placeholder':_('Email')}))
    user_status = forms.ChoiceField(choices=userstatus_choice)
    password = forms.CharField(widget= forms.PasswordInput(attrs={'placeholder':_('Password')}))

    def clean_email(self):
        email = self.cleaned_data.get('email')
        email_count = User.objects.filter(email=email).count()
        if email_count == 0:
            return email
        else:
            raise forms.ValidationError(_('This email already exist'))

    def clean_username(self):
        username = self.cleaned_data['username']

        try:
            User.objects.get(username=username)
        except User.DoesNotExist:
            return username
        raise forms.ValidationError(_('Username is already taken.'))


class Login(forms.Form):
    email = forms.EmailField(widget= forms.TextInput(attrs={'placeholder':_('Email')}))
    password = forms.CharField(widget= forms.PasswordInput(attrs={'placeholder':_('Password')}))

    def clean_email(self):
        #get the entry email of current user
        email = self.cleaned_data['email']
        #check of the given user email exist in the database
        user_email = User.objects.filter(email=email).count()
        #if email exist return email value else throw error
        if user_email != 0:
            return email
        else:
            raise forms.ValidationError(_('Wrong email'))

    def clean_password(self):
        #get the entry login data(email and password) of current user
        password = self.cleaned_data['password']
        email = self.cleaned_data['email']
        #get user base on his email
        user = User.objects.get(email=email)
        #verify if the user given password is correct
        check_pass = user.check_password(password) #check_pass return a boolean
        #if password exist return password value else rerender the login form with error
        if check_pass:
            return password
        else:
            raise forms.ValidationError(_('Wrong password'))
