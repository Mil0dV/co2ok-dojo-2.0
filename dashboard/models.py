from django.db import models

# Create your models here.
from os import getenv
from datetime import datetime

from pynamodb.attributes import UnicodeAttribute, UTCDateTimeAttribute, NumberAttribute
from pynamodb.models import Model

STAGE = 'production'
# DB_HOST = None if not getenv('CO2OK_DEV_ENV', False) else "http://localhost:8000"
DB_HOST = None


class Merchant(Model):
    class Meta:
        table_name = STAGE + '_merchants'
        host = DB_HOST
        region = "eu-central-1"

    id = UnicodeAttribute(hash_key=True)
    secret = UnicodeAttribute()
    name = UnicodeAttribute()
    email = UnicodeAttribute()
    shortcode = UnicodeAttribute()

    # currently no relation between tables
    # transactions = OneToMany('Transaction', null=True)


class Transaction(Model):
    class Meta:
        table_name = STAGE + '_transaction'
        host = DB_HOST
        region = "eu-central-1"

    merchant_id = UnicodeAttribute(hash_key=True)
    order_id = NumberAttribute(range_key=True)

    timestamp = UTCDateTimeAttribute(default=datetime.now)
    order_id = NumberAttribute()
    compensation_cost = NumberAttribute()
    order_total = NumberAttribute()
    currency = UnicodeAttribute()
