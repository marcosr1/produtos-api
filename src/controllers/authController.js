import jwt from 'jsonwebtoken';

export const login = (req, res) => {
    const {user, password} = req.body;

    if ( user !== process.env.API_USER || password !== process.env.API_PASS) return res.status(401).json({ error: "Credenciais inválidas"});

    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });

    return res.json({ token });
};