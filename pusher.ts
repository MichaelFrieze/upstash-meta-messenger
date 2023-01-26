import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
  appId: '1543551',
  key: '6214ed8b92f59e18686e',
  secret: process.env.PUSHER_SECRET || '',
  cluster: 'us2',
  useTLS: true,
});

export const clientPusher = new ClientPusher('6214ed8b92f59e18686e', {
  cluster: 'us2',
  forceTLS: true,
});
