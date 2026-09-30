import jwt from "jsonwebtoken";

export function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });

    return token;
}
