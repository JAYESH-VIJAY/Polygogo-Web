import RequestPaymentForm from "@/modules/Payment/RequestPaymentForm";
import RootModal from "./RootModal";

interface RequestPaymentModalType {
  isVisible: boolean;
  closeModal: () => void;
}
function RequestPaymentModal({
  isVisible,
  closeModal,
}: RequestPaymentModalType) {
  return (
    <div>
      <RootModal isOpen={isVisible}>
        <RequestPaymentForm closeModal={closeModal} />
      </RootModal>
    </div>
  );
}

export default RequestPaymentModal;
