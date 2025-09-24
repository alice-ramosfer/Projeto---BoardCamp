import { customersRepositories } from "../repositories/customers.repositories.js";

async function getCustomers() {
   return await customersRepositories.getCustomers();
}

async function getCustomersId({id}) {
    const result = await customersRepositories.getCustomersId(id);
    if (result.rowCount === 0) throw {type:"NotFound", message:"usuário não encontrado com esse id"};
    return result.rows;
}

async function postCustomers(client) {
    const conflict = await customersRepositories.getCustomersCPF(client.cpf);
    if (conflict.rowCount !== 0) throw {type:"conflict", message:"um cliente com esse cpf ja existe"};
    await customersRepositories.postCustomers(client);
}

const customersServices ={
    getCustomers,
    getCustomersId, 
    postCustomers
}

export default customersServices;