from rest_framework import routers
from api.viewsets import EmployeeViewSet

router = routers.SimpleRouter()
router.register(r'', EmployeeViewSet, basename='employees')