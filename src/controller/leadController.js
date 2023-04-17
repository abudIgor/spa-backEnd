const LeadService = require("../services/LeadService");
const allowCors = require("../api/allowCors");

const add = async (req, res) => {
   try {
      const createLead = await LeadService.addLead(req.body);
      res.status(200).json(createLead);
   } catch(error) {
      return res.status(500).json({error:error});
   }
}

module.exports = allowCors(add)

// exports.add = async (req,res) => {
//    try {
//       const createLead = await LeadService.addLead(req.body);
//       res.status(200).json(createLead);
//    } catch(error) {
//       return res.status(500).json({error:error});
//    }
// }
