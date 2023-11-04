import clsx from "classnames";
import Image from "next/image";
import Button from "../Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  classes?: {
    wrapper?: string;
    content?: string;
  };
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  classes,
}) => {
  if (!isOpen) return null;
  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        classes?.wrapper
      )}
    >
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="modal-overlay absolute inset-0 bg-gray-900 opacity-50"
          onClick={onClose}
        ></div>
        <div
          className={clsx(
            "modal-container bg-white w-11/12 md:max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto",
            classes?.content
          )}
        >
          <div className="modal-actions pt-8 pr-8 text-right ">
            <Button onClick={onClose} className="bg-white">
              <Image
                className="cursor-pinter"
                src="/images/icons/close-circle.svg"
                alt="delete-task"
                width="24"
                height="24"
              />
            </Button>
          </div>
          <div className="modal-content py-8 pt-0 text-left px-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
