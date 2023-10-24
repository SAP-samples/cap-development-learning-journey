const cds = require('@sap/cds');

class AdminService extends cds.ApplicationService {

    init() {
        const { Authors } = this.entities;

        // Validate the life data entered for an author
        this.before(['CREATE', 'UPDATE'], Authors, this.validateLifeData);

        return super.init();
    }


    validateLifeData(req) {
        const { dateOfBirth, dateOfDeath } = req.data;
        if (!dateOfBirth || !dateOfDeath) {
            return;
        }

        const birth = new Date(dateOfBirth);
        const dead = new Date(dateOfDeath);

        if (dead < birth) {
            req.error(`The date of death (${dateOfDeath}) is before the date of birth (${dateOfBirth}).`);
        }
    }

}

module.exports = AdminService;