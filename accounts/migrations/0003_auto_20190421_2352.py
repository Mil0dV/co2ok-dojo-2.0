# Generated by Django 2.0.9 on 2019-04-21 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20190420_1534'),
    ]

    operations = [
        migrations.AlterField(
            model_name='webshopprofile',
            name='zipCode',
            field=models.CharField(max_length=255),
        ),
    ]