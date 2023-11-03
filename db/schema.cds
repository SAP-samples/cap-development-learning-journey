namespace com.sap.learning;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Books : cuid, managed {
    title       : String(255);
    author      : Association to Authors;
    genre       : Genre;
    publCountry : String(3);
    stock       : NoOfBooks;
    price       : Price;
    isHardcover : Boolean;
}

type Genre     : Integer enum {
    fiction     = 1;
    non_fiction = 2;
}

type NoOfBooks : Integer;

type Price {
    amount   : Decimal;
    currency : String(3);
}


entity Authors : cuid, managed {
    name        : String(100);
    dateOfBirth : Date;
    dateOfDeath : Date;
    books       : Association to many Books
                      on books.author = $self;
}
