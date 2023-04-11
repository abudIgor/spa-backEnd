const Todo = require("../models/Lead");
const LeadService = require("../services/LeadService");

exports.add = async (req,res) => {
   try {
      req.header("Access-Control-Allow-Origin", "*")
      req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      const createLead = await LeadService.addLead(req.body);
      res.status(200).json(createLead);
   } catch(error) {
        return res.status(500).json({error:error});
   }
}
