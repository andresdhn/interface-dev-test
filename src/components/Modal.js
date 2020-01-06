export default props => (
    <div id="modal" className={`${props.visible === true ? 'open' : ''}`}>
        <div className="modal__content">
            <div className="modal__close modal-toggle" onClick={props.onToggle}>
                X
            </div>
            <div className="modal__dialog">
                <img src={props.image} alt="" />
            </div>
        </div>
    </div>
)
