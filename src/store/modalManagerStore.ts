import { create } from "zustand";



type ModalType = 'order' | 'selfOrder' | 'verify' | 'error' | 'cart' | null;

interface ModalManagerStoreTypes {
    activeModal: ModalType;
    openModal: (modal: ModalType) => void;
    closeModal: () => void;
    switchModal: (modal: ModalType) => void;
}

export const useModalManagerStore = create<ModalManagerStoreTypes>((set) => ({
    activeModal: 'order',
    openModal: (modal) => set({ activeModal: modal }),
    closeModal: () => set({ activeModal: null }),
    switchModal: (modal) => set({ activeModal: modal }),
}));
