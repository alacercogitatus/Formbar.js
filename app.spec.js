const perms = require("./static/js/permissions")
console.log({perms})
test("MANAGER_PERMISSIONS are 5", () => {
    expect(perms.user.MANAGER_PERMISSIONS).toBe(5)
})
test("TEACHER_PERMISSIONS are 4", () => {
    expect(perms.user.TEACHER_PERMISSIONS).toBe(4)
})