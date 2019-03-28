from django.test import TestCase
from allauth.socialaccount.models import SocialApp
from django.contrib.sites.models import Site
from django.urls import reverse

def set_up_allauth():
    site = Site.objects.create(name="localhost", domain="localhost")
    fb = SocialApp.objects.create(
        provider="facebook",
        name="Facebook",
        client_id="<id>",
        secret="<secret>",
    )
    fb.sites.add(site)
    fb.save()

class CollectionPageTest(TestCase):
    def setUp(self):
        set_up_allauth()

    def test_collection_visitor(self):
        # import pdb; pdb.set_trace()
        response = self.client.get(reverse("collection"))
        self.assertRedirects(
            response, reverse("account_login"), status_code=302
        )
