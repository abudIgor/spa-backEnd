const Lead = require("../models/Lead");

module.exports = class LeadService {
  
    static async addLead(data) {
        try {
            const newLead = {
                name        : data.name,
                phone       : data.phone,
                email       : data.email
            }
            const response = await new Lead(newLead).save();
            return response;
        } catch (error) {
            console.log(`Could note add todo ${error}`);
        }
    }

}