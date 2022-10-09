const AuthModal = ({ setShowModal }) => {

    const handleClick = () => {
        setShowModal(false)
    }

    return (
        <div className="auth-modal">
            <div onClick={handleClick}>X</div>
            Modal
        </div>
    )
}

export default AuthModal