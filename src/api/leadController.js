const LeadService = require("../services/LeadService");

exports.add = async (req,res) => {
   try {
      res.setHeader("Access-Control-Allow-Origin", "*");
      const createLead = await LeadService.addLead(req.body);
      res.status(200).json(createLead);
   } catch(error) {
      return res.status(500).json({error:error});
   }
}
