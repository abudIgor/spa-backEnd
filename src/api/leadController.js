const LeadService = require("../services/LeadService");

const allowCors = fn => async (req, res) => {
   res.setHeader('Access-Control-Allow-Credentials', true)
   res.setHeader('Access-Control-Allow-Origin', '*')
   // another common pattern
   // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
   res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
   res.setHeader(
     'Access-Control-Allow-Headers',
     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
   )
   if (req.method === 'OPTIONS') {
     res.status(200).end()
     return
   }
   return await fn(req, res)
 }
 
 const handler = async (req, res) => {

   try {
      const createLead = await LeadService.addLead(req.body);
      res.send(createLead);
   } catch(error) {
      return res.status(500).json({error:error});
   }
 }
 
 module.exports = allowCors(handler)

// exports.add = async (req,res) => {
//    try {
//       // res.setHeader("Access-Control-Allow-Origin", "*");
//       const createLead = await LeadService.addLead(req.body);
//       res.status(200).json(createLead);
//    } catch(error) {
//       return res.status(500).json({error:error});
//    }
// }
