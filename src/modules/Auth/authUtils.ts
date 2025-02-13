import jwt from 'jsonwebtoken';
export const createToken = (
    jwtPayload: { userId: string; role: string },
    secret: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    expiresIn: string,
) => {
    return jwt.sign(jwtPayload, secret, {
        expiresIn: '1d',
    });
};
