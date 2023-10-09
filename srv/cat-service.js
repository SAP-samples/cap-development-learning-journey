const cds = require('@sap/cds');

class CatalogService extends cds.ApplicationService {

    init() {
        const { Books } = this.entities;

        // Reduce the stock of the ordered book according to the ordered quantity
        this.on('submitOrder', this.reduceStock);


        // Add discount for overstocked books
        this.after('READ', Books, this.grantDiscount);


        return super.init();
    }


    grantDiscount(results) {
        for (let b of results) {
            if (b.stock > 200) { b.title += ' -- 11% discount!'; }
        }

    }

    async reduceStock(req) {

        const { Books } = this.entities;
        const { book, quantity } = req.data;

        if (quantity < 1) { return req.error('The quantity must be at least 1.'); }

        const b = await SELECT.one.from(Books).where({ ID: book }).columns(b => { b.stock });

        if (!b) { return req.error(`Book #${book} doesn't exist.`); }

        let { stock } = b;
        if (quantity > stock) { return req.error(`${quantity} exceeds stock ${stock} for book #${book}`); }

        await UPDATE(Books).where({ ID: book }).with({ stock: stock -= quantity });
        return { stock };

    }
 

}

module.exports = CatalogService;