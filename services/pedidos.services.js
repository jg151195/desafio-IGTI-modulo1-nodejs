import OrderRepository from "../repository/pedidos.repository.js";

const services = {
    async createOrder(newOrder){ return OrderRepository.createOrder(newOrder)},
    async updateOrder(updatedOrder) { return OrderRepository.updateOrder(updatedOrder) }, 
    async deliveryStatus(deliveryStatus){ return OrderRepository.deliveryStatus(deliveryStatus)},
    async deleteOrder(id){return OrderRepository.deleteOrder(id)},
    async getOrder(id){return OrderRepository.getOrder(id)},
    async clientAllTimePayment(client){return OrderRepository.clientAllTimePayment(client)},
    async productAllTimePayment(product){return OrderRepository.productAllTimePayment(product)},
    async bestSellers(){return OrderRepository.bestSellers()}
}

export default services;