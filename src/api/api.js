import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; 

export const getProducts = () => {
return axios.get(API_BASE_URL + "/products");
};

export const getProductById = (id) => {
return axios.get(API_BASE_URL + "/products/" + id);
};

export const createOrder = (orderData) => {
return axios.post(API_BASE_URL + "/orders", orderData);
};

export const processPayment = (paymentData) => {
return axios.post(API_BASE_URL + "/payments/process-payment", paymentData);
};