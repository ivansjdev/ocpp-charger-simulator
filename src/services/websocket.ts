import { useConnectionStore } from "@/stores/connection";

export const connect = () => {
  const { socket, url, setSocket, setStatus } = useConnectionStore.getState()
  if (socket) socket.close()
  if(!url) return
  const ws = new WebSocket(url)

  ws.onerror = (err) => {
    console.log('Error: ', err);
  };

  ws.onopen = () => {
    console.log('Connected');
    setSocket(ws);
    setStatus(true);
  };

  ws.onclose = () => {
    console.log('Disconnected');
    setStatus(false);
    setSocket(null);
  };
};

export const disconnect = () => {
  const { socket } = useConnectionStore.getState();
  if (!socket) return
  socket.close();
}

