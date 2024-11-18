function ModalForm(isOpen, onClose, mode, onSubmit) {
  return (
    <div>
      <button
        className="btn bg-pink-600 text-white text-lg"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit client" : "Client Details"}
          </h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-success">
              {mode === "edit" ? "Save changes" : "Add client"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default ModalForm;
