import { db } from "../database/database.js";

async function getCustomersCPF(cpf) {
    const result = await db.query(`SELECT * FROM customers WHERE customers.cpf=$1;`,[cpf]);
    return result;
}

async function getCustomers() {
    const result = await db.query(`SELECT * FROM customers;`);
    return result.rows;
}

async function getCustomersId(id) {
    const result = await db.query(`SELECT * FROM customers WHERE customers.id=$1;`,[id])
    return result;
}

async function postCustomers({name,phone,cpf}) {
    await db.query(`INSERT INTO customers (name,phone,cpf) VALUES ($1,$2,$3)`,[name,phone,cpf])
}

export const customersRepositories ={
    getCustomers,
    getCustomersId,
    getCustomersCPF,
    postCustomers
}