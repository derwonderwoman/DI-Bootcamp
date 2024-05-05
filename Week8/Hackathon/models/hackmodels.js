const db = require('../config/data.js');

const _getUserFinancialData = (id) => {
    return db("expenses")
        .select("categories.name", db.raw("SUM(expenses.amount) as totalamount"))
        .innerJoin("categories", "categories.id", "expenses.category_id")
        .where("expenses.user_id", id)
        .groupBy("categories.name");
};

const _getUserPersonalData = (id) => {
    return db("users").select("number_of_people","country","monthly_income").where({id:id});
};

module.exports = {
    _getUserFinancialData,
    _getUserPersonalData
}