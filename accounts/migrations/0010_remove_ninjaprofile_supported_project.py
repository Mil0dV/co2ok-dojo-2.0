# Generated by Django 2.0.9 on 2019-05-26 15:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0009_ninjaprofile_supported_project'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ninjaprofile',
            name='supported_project',
        ),
    ]
