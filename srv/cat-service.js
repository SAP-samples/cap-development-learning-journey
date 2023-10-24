const cds = require('@sap/cds');

class CatalogService extends cds.ApplicationService {

    init() {
        const { Books } = this.entities;

        // Add discount for overstocked books
        this.after('READ', Books, this.grantDiscount);


        return super.init();
    }


    grantDiscount(results) {
        for (let b of results) {
            if (b.stock > 200) { b.title += ' -- 11% Discount!'; }
        }
    }

}

module.exports = CatalogService;