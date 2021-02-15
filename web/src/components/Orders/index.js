import { useEffect, useState } from 'react';

import { Container, Card } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/orders');
      const json = await res.json();

      setOrders(json);
    })();
  }, []);

  return (
    <Container>
      {orders.map(order => (
        <Card key={order._id} status={order.status}>
          <header>
            <h3>
              Pedido <strong>#{order._id.substr(0, 10)}</strong>
            </h3>
            <small>Mesa #{order.table}</small>
          </header>

          <p>{order.description}</p>

          <select value={order.status}>
            <option value="PENDING">Pendente</option>
            <option value="PREPARING">Preparando</option>
            <option value="DONE">Finalizado</option>
          </select>
        </Card>
      ))}
    </Container>
  );
}
