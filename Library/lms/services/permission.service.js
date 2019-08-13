class PermissionService {
    _permissions = {
        user: {
                read:   true,
                wright: false,
            },
        librarian: {
            read:   true,
            wright: true
        }
    };

    getPermissions(status) {
        return this._permissions[status];
    }
}
