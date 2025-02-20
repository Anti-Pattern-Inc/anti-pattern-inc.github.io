import { Dialog } from '@headlessui/react'
import { Dispatch, SetStateAction } from 'react'

import { Contact } from './index'

const ContactDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-10"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <Dialog.Title className="text-lg font-medium text-[#0277BD]">
              お問い合わせ
            </Dialog.Title>
            <Contact />
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export { ContactDialog }
