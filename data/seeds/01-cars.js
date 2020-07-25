
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: 12345678901234568,
          make: "KIA",
          model: "Optima",
          mileage: 4000,
          transmission: "Auto",
          titleStats: "Clean"
        },
        {
          VIN: 87475746379876583,
          make: "Isuzu",
          model: "Trooper",
          mileage: 70000,
          transmission: "Manual",
          titleStats: "Clean"
        },
        {
          VIN: 86985987646514325,
          make: "Chrysler",
          model: "200",
          mileage: 50000,
          transmission: "Auto",
          titleStats: "Salvage"
        },
        {
          VIN: 83767576476598123,
          make: "Tesla",
          model: "Model S",
          mileage: 400,
          transmission: "Other (Electric Motor)",
          titleStats: "Clean"
        }
      ]);
    });
};
