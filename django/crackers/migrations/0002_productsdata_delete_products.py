# Generated by Django 5.2.2 on 2025-06-06 02:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crackers', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductsData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('price', models.CharField(max_length=255)),
                ('quantity', models.CharField(max_length=255)),
                ('image', models.CharField(max_length=255)),
            ],
        ),
        migrations.DeleteModel(
            name='Products',
        ),
    ]
