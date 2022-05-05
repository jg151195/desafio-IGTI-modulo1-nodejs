import {
    promises as fs
} from "fs";

global.fileName = "../desafio-modulo1-nodejs/pedidos.json";

const repository = {
    async createOrder(newOrder) {
        const data = JSON.parse(await fs.readFile(fileName));

        if (!newOrder.cliente || !newOrder.produto || !newOrder.valor) {
            return "Erro";
        } else {

            const order = {
                id: data.nextId,
                ...newOrder,
                entregue: false,
                timestamp: new Date()
            }
            data.nextId++;
            data.pedidos.push(order);
            await fs.writeFile(fileName, JSON.stringify(data, null, 2));
            return order;
        }

    },

    async updateOrder(updatedOrder) {
        const data = JSON.parse(await fs.readFile(fileName));
        let order = data.pedidos.find((a) => a.id == updatedOrder.id);
        if (order == undefined) {
            return "Pedido inexistente"
        } else {
            order = {
                ...updatedOrder,
                timestamp: order.timestamp
            }
            if (!order.cliente || !order.produto || !order.valor || !order.entregue) {
                return "Falta informações";
            }
        }
        data.pedidos.push(order);
        data.pedidos.splice(data.pedidos.findIndex(a => a.id === updatedOrder.id), 1);
        data.pedidos.sort((a, b) => a.id - b.id);
        await fs.writeFile(fileName, JSON.stringify(data, null, 2));
        return order
    },

    async deliveryStatus(deliveryStatus) {
        const data = JSON.parse(await fs.readFile(fileName));
        const order = data.pedidos.find((a) => a.id == deliveryStatus.id);
        order.entregue = deliveryStatus.entregue;

        data.pedidos.push(order);
        data.pedidos.splice(data.pedidos.findIndex(a => a.id == deliveryStatus), 1);
        data.pedidos.sort((a, b) => a.id - b.id)
        await fs.writeFile(fileName, JSON.stringify(data, null, 2));
        return order
    },

    async deleteOrder(id) {
        const data = JSON.parse(await fs.readFile(fileName));
        data.pedidos.splice(data.pedidos.findIndex(a => a.id == id.id), 1);
        await fs.writeFile(fileName, JSON.stringify(data, null, 2));
        return "Sucess";
    },
    async getOrder(id) {
        const data = JSON.parse(await fs.readFile(fileName));
        const order = data.pedidos.find(a => a.id == id.id);
        return order;
    },
    async clientAllTimePayment(client) {
        console.log(client)
        const data = JSON.parse(await fs.readFile(fileName));
        const order = data.pedidos.filter((a) => a.cliente == client.cliente && a.entregue == true);
        const total = order.reduce(((acc, va) => acc + va.valor), 0);

        return String(total);
    },
    async productAllTimePayment(product) {
        const data = JSON.parse(await fs.readFile(fileName));
        const order = data.pedidos.filter((a) => a.produto == product.produto && a.entregue == true);
        const total = order.reduce(((acc, va) => acc + va.valor), 0);

        return String(total);
    },
    async bestSellers() {
        const data = JSON.parse(await fs.readFile(fileName));
        const ordersDelivered = data.pedidos.filter((a) => a.entregue == true);
        const array = []
        ordersDelivered.reduce((acc, val) => {

            if (acc.find((a)=> a.pizza == val.produto)) {
                acc.find((a)=> a.pizza == val.produto).quantidade++;
            } else {
                acc.push({
                    pizza: val.produto,
                    quantidade: 1
                })
            }
            return acc;
        }, []).sort((a,b) => b.quantidade - a.quantidade).map((a)=> array.push(`${a.pizza} - ${a.quantidade}`));

        return array;

    }


}

export default repository;