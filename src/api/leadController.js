const Todo = require("../models/Lead");
const LeadService = require("../services/LeadService");

exports.add = async (req,res) => {
   try {
      res.setHeader("Access-Control-Allow-Credentials", `true`);
      res.setHeader("Access-Control-Allow-Origin", "*");
      const createLead = await LeadService.addLead(req.body);
      res.status(201).json(createLead);
   } catch(error) {
        return res.status(500).json({error:error});
   }
}
