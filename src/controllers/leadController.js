const Todo = require("../models/Lead");
const LeadService = require("../services/LeadService");

exports.add = async (req,res) => {
   try {
        const createLead = await LeadService.addLead(req.body);
        if(req.method === 'OPTIONS') { return res.status(200).json(createLead) }
     //    res.status(201).json(createLead);
   } catch(error) {
        return res.status(500).json({error:error});
   }
}
