export default function validateInfo (values) {
    const errors = {};

    // Username
    if (!values.username.trim()) {
        errors.username = "Username required";
    }

    // Email
    if (!values.email) {
        errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.password) {
        errors.password = "Password required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be 6 characters or more";
    }
    if (!values.password2) {
        errors.password2 = "Password required";
    } else if (values.password2 !== values.password) {
        errors.password2 = "Passwords do not match";
    }

    return errors;
}