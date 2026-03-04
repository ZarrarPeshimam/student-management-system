function login(user) {
    if (user.type === "student") {
        return "Student Portal";
    }

    return "Unauthorized";
}

module.exports = login;
