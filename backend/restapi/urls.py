from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

urlpatterns = [
    path('', include('rest_auth.urls')),

    path('registration/', include('rest_auth.registration.urls')),
    path('obtain_token/', obtain_jwt_token, name="obtain-jwt"),
    path('refresh_token/', refresh_jwt_token, name="refresh-jwt"),
    path('verify_token/', verify_jwt_token, name="verify_jwt"),
]
