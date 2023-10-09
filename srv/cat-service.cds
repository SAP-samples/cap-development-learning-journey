using {com.sap.learning as db} from '../db/schema';

service CatalogService @(path: '/cat') {

    @readonly
    entity Authors as projection on db.Authors {
        *,
        epoch.name as period
    } excluding {
        createdAt,
        createdBy,
        modifiedAt,
        modifiedBy
    };


    @readonly
    entity Books   as projection on db.Books {
        ID,
        title,
        author.name      as writer,
        publCountry.name as publCountry,
        isHardcover,
        price.amount,
        price.currency,
        stock,
        author
    };

    @requires: 'authenticated-user'
    action submitOrder(book : db.Books:ID, quantity : Integer) returns {
        stock : db.Books:stock
    };


}
