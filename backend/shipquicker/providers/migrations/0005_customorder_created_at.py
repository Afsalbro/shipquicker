# Generated by Django 4.0.3 on 2022-10-22 09:07

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('providers', '0004_remove_customorder_address_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customorder',
            name='created_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2022, 10, 22, 14, 7, 0, 259763)),
        ),
    ]
