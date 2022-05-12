# Generated by Django 3.0.14 on 2022-05-06 12:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255)),
                ('deparment', models.CharField(max_length=255)),
                ('salary', models.FloatField()),
                ('birth_date', models.DateField()),
            ],
        ),
    ]