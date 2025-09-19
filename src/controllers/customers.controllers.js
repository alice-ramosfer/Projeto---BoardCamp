import customersServices from "../services/customers.services.js";

export async function getCustomers(req,res) {
   const result = await customersServices.getCustomers();
    return res.status(200).send(result);
}

export async function getCustomersId(req,res) {
    const result = await customersServices.getCustomersId(req.params);
    return res.status(200).send(result);
}
export async function postCustomers(req,res) {
    await customersServices.postCustomers(req.body)
    res.sendStatus(201);
}