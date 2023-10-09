using {com.sap.learning as db} from '../db/schema';


/**
 * Serves administrators managing everything
 */
service AdminService @(
    requires: 'admin',
    path    : '/admin'
) {

    entity Books   as projection on db.Books;
    entity Authors as projection on db.Authors;

}


