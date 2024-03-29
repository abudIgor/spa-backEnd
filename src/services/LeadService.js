const Lead = require("../models/Lead");

module.exports = class LeadService {

    static async getAllLeads() {
        try {
            const allLeads = await Lead.find();
            return allLeads;
        } catch (error) {
            console.log(`Could not fetch Leads ${error}`);
        }
    }
  
    static async addLead(data) {
        try {
            const newLead = {
                name        : data.name,
                phone       : data.phone,
                email       : data.email,
                isConverted : data.isConverted
            }
            const response = await new Lead(newLead).save();
            return response;
        } catch (error) {
            console.log(`Could note add Lead ${error}`);
        }
    }

    static async getLeadByPhone(phoneLead) {
        try {
            const lead = await Lead.find({ phone : phoneLead});
            return lead;
        } catch (error) {
            console.log(`Could not found. ${error}`);
        }
    }

    static async updateLead(id, lead) {
        try {
            const updatedLead = await Lead.updateOne(
                {_id: id},
                { ...lead}
            )
            return updatedLead;
        } catch (error) {
            console.log(`Could note update Lead ${error}`);
        }
    }

}