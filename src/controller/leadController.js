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
       res.status(201).json(leads);
   } catch (error) {
       return res.status(500).json({ error: error});
   }
}

exports.get = async (req, res) => {
   let phone = req.params.phone;
   try {
       const lead = await LeadService.getLeadByPhone(phone);
       res.json(lead);
   } catch (error) {
       res.status(500).json({error: error});
   }
}
