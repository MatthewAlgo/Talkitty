from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to allow only owners of an object to edit it.
    Assumes the object has an 'owner' attribute.
    """

    def has_object_permission(self, request, view, obj):
        # Read-only permissions are allowed for any request (safe methods like GET, HEAD, OPTIONS).
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the object.
        return obj.owner == request.user


class IsAdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission to allow only admins to edit content.
    Other users can only have read-only access.
    """

    def has_permission(self, request, view):
        # Read-only permissions are allowed for any request.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to admin users.
        return request.user and request.user.is_staff


class IsAuthenticatedAndActive(permissions.BasePermission):
    """
    Custom permission to ensure that the user is authenticated and has an active account.
    """

    def has_permission(self, request, view):
        # Check if the user is authenticated and their account is active.
        return request.user and request.user.is_authenticated and request.user.is_active
