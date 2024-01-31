import RootModal from "./RootModal";
import EstimateForm from "@/modules/Payment/Estimate/EstimateForm";

interface EstimateModalType {
  isVisible: boolean;
  closeModal: () => void;
}
function CreateEstimateModal({ isVisible, closeModal }: EstimateModalType) {
  return (
    <div>
      <RootModal isOpen={isVisible} closeModal={closeModal}>
        <EstimateForm closeModal={closeModal} />
      </RootModal>
    </div>
  );
}

export default CreateEstimateModal;
