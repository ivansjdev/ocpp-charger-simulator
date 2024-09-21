import { create } from "zustand";

interface connection {
  socket: WebSocket | null;
  cpId: string;
  url: string;
  protocol: string | string[];
  status: boolean;
  setSocket: (socket: WebSocket | null) => void;
  setUrl: (url: string) => void;
  setProtocol: (protocol: string | string[]) => void;
  setCpId: (cpId: string) => void;
  setStatus: (status: boolean) => void;
}

export const useConnectionStore = create<connection>((set) => ({
  socket: null,
  cpId: "",
  url: "",
  protocol: "",
  status: false,
  setSocket: (socket) => set({ socket }),
  setUrl: (url: string) => set({ url }),
  setProtocol: (protocol: string | string[]) => set({ protocol }),
  setCpId: (cpId: string) => set({ cpId }),
  setStatus: (status: boolean) => set({ status }),
}))