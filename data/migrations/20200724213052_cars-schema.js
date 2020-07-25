
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        // required: VIN, make, model, mileage
        tbl.integer('VIN', 17).unique().notNullable();
        tbl.text('make').notNullable();
        tbl.text('model').notNullable();
        tbl.integer('mileage').notNullable();
        // not required: transmission, titleStats 
        tbl.string('transmission')
        tbl.text('titleStats')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
