namespace com.sap.learning;

entity Books {
    key ID          : UUID;
        title       : String(255);
        genre       : Genre;
        publCountry : String(3);
        stock       : noOfBooks;
        price       : Price;
        isHardcover : Boolean;
}

type Genre     : Integer enum {
    fiction     = 1;
    non_fiction = 2;
}

type noOfBooks : Integer;

type Price {
    amount   : Decimal;
    currency : String(3);
}


entity Authors {
    key ID          : UUID;
        name        : String(100);
        dateOfBirth : Date;
        dateOfDeath : Date;
}