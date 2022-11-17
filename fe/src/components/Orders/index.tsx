import { Container } from './styles';
import { OrdersBoard } from '../OrdersBoard';
import { Order } from '../../types/Order';

const orders: Array<Order> = [
  {
    '_id': '6372e4600e877e4a72a56d1d',
    'table': '1',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668472987342-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '6372e4600e877e4a72a56d1e'
      },
      {
        'product': {
          'name': 'Coca-cola',
          'imagePath': '1668473474377-coca-cola.png',
          'price': 6,
        },
        'quantity': 4,
        '_id': '6372e4600e877e4a72a56d1f'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />

      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders={[]}
      />

      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
