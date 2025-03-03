const perms = require("./static/js/permissions")
console.log({perms})
test("MANAGER_PERMISSIONS are 5", () => {
    expect(perms.MANAGER_PERMISSIONS).toBe(5)
})
test("TEACHER_PERMISSIONS are 4", () => {
    expect(perms.TEACHER_PERMISSIONS).toBe(4)
})