const mkpmodel = require('../database/models/mkpModel')

module.exports = {
    getmkplist: async (req, res) => {
        const dbMkp = await mkpmodel.find({}) 
        console.log(dbMkp.isSignal);
        res.render('admin/mkplist', {dbMkp})
    },
    putmkplist: (req, res) => {
        const mymkp = {_id: req.params.id}
        mkpmodel.findOneAndUpdate(
            mymkp,
            {
                isSignal: false
            },
            (err) => {
                if (!err) {
                    res.redirect('/mkplist')
                } else {
                    res.rend(err)
                }
            }
        )
    },
}