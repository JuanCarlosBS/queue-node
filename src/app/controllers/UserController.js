import Queue from "../lib/Queue";

export default {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password,
        };
        console.log('check-before-queue')
        await Queue.add('RegistrationMail', { user })
        console.log('check')

        return res.json(user)
    }
}