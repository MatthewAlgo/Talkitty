from django.urls import path
from producer_gate.views import ChatMessageProducerView

urlpatterns = [
    path('chat/send/', ChatMessageProducerView.as_view(), name='chat_message_producer'),
]