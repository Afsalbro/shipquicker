# Generated by Django 4.0.3 on 2022-04-11 04:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_usercomplaint'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='usercomplaint',
            options={'verbose_name': 'User Complaint', 'verbose_name_plural': 'User Complaints'},
        ),
        migrations.AlterModelOptions(
            name='userprofile',
            options={'verbose_name': 'User Profile', 'verbose_name_plural': 'User Profiles'},
        ),
    ]