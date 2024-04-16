import postgres from "postgres";
const sql = postgres({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        database: 'bootcamp',
        password: 'Jurush5n1'
});

async function getVersion(){
    const result = await sql`select * from products`;
    console.log(result);
};

getVersion();

// import knex from "knex";

// const db = knex({
//     client: 'pg',
//     connection: {
//         host: 'localhost',
//         port: 5432,
//         user: 'postgres',
//         database: 'bootcamp',
//         password: 'Jurush5n1'
//     }
// });

// async function getVersion(){
//     const result = await db.raw('select * from products')
//     console.log(result.rows);
// }

// getVersion();

// db('products')

// .where({id:1})
// .del()
// .returning("*")

// .update({name:'iPhone 15'})
// .where({id:1})

// .insert({name:'iCar',price:150000})
// .select('id','name')
// .where({id:3})

// .then((data) => {
//     console.log(data);
// })
// .catch((e) => {
//     console.log(e);
// });