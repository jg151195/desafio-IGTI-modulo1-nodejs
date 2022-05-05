import OrderServices from "../services/pedidos.services.js";

const controller = {
    async createOrder(req,res){
        const newOrder = req.body;
        res.send(await OrderServices.createOrder(newOrder));
    },

    async updateOrder(req,res){
        const updatedOrder = req.body;
        res.send(await OrderServices.updateOrder(updatedOrder));
    },
    async deliveryStatus(req,res){
        const deliveryStatus = req.body;
        res.send(await OrderServices.deliveryStatus(deliveryStatus));
    },
    async deleteOrder(req,res){
        const deleteOrder = req.body;
        res.send(await OrderServices.deleteOrder(deleteOrder));
    },
    async getOrder(req,res){
        const getOrder = req.body;
        res.send(await OrderServices.getOrder(getOrder));
    },
    async clientAllTimePayment(req,res){
        const client = req.body;
        res.send(await OrderServices.clientAllTimePayment(client));
    },
    async productAllTimePayment(req,res){
        const product = req.body;
        res.send(await OrderServices.productAllTimePayment(product));
    },
    async bestSellers(req,res){
        res.send(await OrderServices.bestSellers());
    }
}
export default controller;