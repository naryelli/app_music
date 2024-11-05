import { User } from "../db.js";

const lista = async (req, res) => {
    const user = await User.findAll({
        attributes: ['nome', 'email']
    });
    res.send(user);
}
export { lista };