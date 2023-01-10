function ErrorModal({ isOpen, message, onClose }) {
    return (
        <div isOpen={isOpen} onClose={onClose}>
            <p>{message}</p>
        </div>
    )
}
export default ErrorModal
