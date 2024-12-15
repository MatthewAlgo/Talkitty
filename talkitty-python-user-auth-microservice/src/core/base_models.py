from django.db import models
from django.utils import timezone

class TimestampedModel(models.Model):
    """
    Abstract base model that provides self-updating 'created_at' and 'updated_at' fields.
    """
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class UUIDModel(models.Model):
    """
    Abstract base model that adds a UUID primary key to models.
    """
    id = models.UUIDField(primary_key=True, default=models.UUIDField, editable=False)

    class Meta:
        abstract = True
