import { Dialog } from '@headlessui/react'
import { Dispatch, SetStateAction } from 'react'

import { ContactForm } from './Contact/Form'

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
      // onCloseは必須Propなので記載。ただし閉じるボタンのみでDialogが閉じてほしいので、
      // ここでは何もしない
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onClose={() => {}}
      className="relative z-10"
    >
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 z-10 overflow-y-auto ">
        <div className="flex min-h-full p-4 items-center justify-center flex-grow-0 flex-shrink-0 w-full">
          <Dialog.Panel className="w-[358px] md:w-[774px] bg-white p-6 shadow-lg flex flex-col items-center justify-center flex-grow-0 flex-shrink-0">
            <Dialog.Title className="text-4xl font-bold text-[#0277BD] mx-auto mb-10">
              お問い合わせ
            </Dialog.Title>
            <ContactForm setIsOpen={setIsOpen} />
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export { ContactDialog }
