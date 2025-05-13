import PropTypes from 'prop-types';

function ProceedButton({ children, disabled, onClick, className }) {
  return (
    <button
      className={`
        fixed bottom-16 left-1/2 -translate-x-1/2
        px-7 py-3 text-lg font-bold rounded-xl text-white
        ${disabled ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}
        transition-colors duration-200
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ProceedButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ProceedButton.defaultProps = {
  disabled: false,
  onClick: () => {},
  className: '',
};

export default ProceedButton;
