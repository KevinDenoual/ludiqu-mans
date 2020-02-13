const userModel = require('../database/models/userModel')

module.exports = {
    getMyAccount: async (req, res) => {
        const dbuser = await userModel.findById(req.params.id)
        res.render('admin/myAccount', {dbuser})
    },

    putMyAccount: async (req, res) => {
        const myuser = await userModel.findById(req.params.id)
        const Pass = req.body.password
        console.log(myuser.password);
        console.log(Pass);
        
        

        if (Pass !== myuser.password){
            res.render('admin/myAccount')
        }else{
            userModel.findOneAndUpdate(
                {
                    name: req.body.name,
                    email: req.body.email   
                },
                { multi: true }
            )
        }
    }
}
