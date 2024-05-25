import bcrypt from 'bcrypt';
import User from '../model/user.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Token from '../model/token.js';

dotenv.config();

export const loginUser = async (request, response) => {
    let user = await User.findOne({ email: request.body.email });
    if(!user) {
        return response.status(400).json({ msg: 'Email does not match '});
    }

    try {
        await bcrypt.compare(request.body.password, user.password);
        if (match) {
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15min' })
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
            
            const newToken = new Token({ token: refreshToken })
            await newToken.save();

            return response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, email: user.email, password: user.password})

        } else {
            response.status(400).json({ msg: 'Password does not match'});
        }
    } catch (error) {
        return response.status(500).json({ msg: 'Error while login user'})
    }
}