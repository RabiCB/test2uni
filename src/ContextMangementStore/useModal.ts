import { create } from 'zustand'


interface ModalState{
    open:boolean,
    setOpen:()=>void
    closeModal:()=>void
}
const useModalStore = create<ModalState>()((set) => ({
  open:false,
    setOpen: () => set({ open:true}),
    closeModal: () => set({ open: false }),
}))


export default useModalStore