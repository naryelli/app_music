import bcryptjs from "bcryptjs"
import { User } from "../db.js";
import jsonwebtoken from "jsonwebtoken"



const registro =  async (req, res) => {
    const { nome, sobrenome, email, senha, dataNascimento } = req.body
    if (!nome || !sobrenome || !email || !senha || !dataNascimento) {
        res.send('Você deve preencher todos os campos')
        return
    }

    const userExiste = await User.findOne({ where: { email: email } })
    if (userExiste) {
        res.send('usuario ja existe')
        return
    }
    const senhaCriptografada = bcryptjs.hashSync(senha, 10)

    const teste = await User.create({ nome, email, sobrenome, senha: senhaCriptografada, dataNascimento })

    res.send('usuario criado')

}


const login = async (req, res) => {
    const { email, senha } = req.body
    if (!email || !senha) {
        res.send('Você deve preencher todos os campos')
        return
    }
    const userExiste = await User.findOne({ where: { email: email } })
    if (!userExiste) {
        res.send('usuario nao existe')
        return
    }
    const senhaValida = bcryptjs.compareSync(senha, userExiste.senha)
    if (!senhaValida) {
        res.send('senha invalida')
        return
    }

    const token = jsonwebtoken.sign(
        {
            "nome_completo": `${userExiste.nome} ${userExiste.sobrenome}`,
            "email": userExiste.email,
            "status": userExiste.status
        },
        'chavecriptografiajwt',
        { expiresIn: 1000 * 60 * 60 * 24 * 30 }
    )
    console.log(token)

    res.send({
        msg: "ok usuario logado",
        tokenJWT: token
    })

}

export {registro, login}