const LeadService = require("../services/LeadService");

exports.add = async (req,res) => {
   try {
      const createLead = await LeadService.addLead(req.body);
      res.status(200).json(createLead);
   } catch(error) {
      return res.status(500).json({error:error});
   }
}

exports.getAll = async (req,res) => {
   try {
       const leads = await LeadService.getAllLeads();
       if(!leads) {
           return res.status(404).json("There are no Leads published yet!");
       }
       res.status(201).json(todos);
   } catch (error) {
       return res.status(500).json({ error: error});
   }
}
