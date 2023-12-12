const cds = require('@sap/cds');

class CatalogService extends cds.ApplicationService {

    init() {
        const { Books } = this.entities;

        // Add discount for overstocked books
        this.after('READ', Books, this.grantDiscount);


        // Reduce the stock of the ordered book according to the ordered quantity
        this.on('submitOrder', this.reduceStock);


        return super.init();
    }


    grantDiscount(results) {
        for (let b of results) {
            if (b.stock > 200) { b.title += ' -- 11% Discount!'; }
        }
    }


    async reduceStock(req) {
        /* !!! This is only a preliminary, incomplete implementation of the submitOrder action. !!!
           !!! In the next lesson, we will learn how to use queries.                            !!!
           !!! These will then be used to complete the implementation.                          !!! */
        const { Books } = this.entities;
        const { book, quantity } = req.data;

        if (quantity < 1) {
            return req.error('The quantity must be at least 1.');
        }


        return { stock: quantity };
    }

}

module.exports = CatalogService;