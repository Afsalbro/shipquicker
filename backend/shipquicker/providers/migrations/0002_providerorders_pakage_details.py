# Generated by Django 4.0.3 on 2022-09-23 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('providers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='providerorders',
            name='pakage_details',
            field=models.TextField(blank=True, null=True),
        ),
    ]