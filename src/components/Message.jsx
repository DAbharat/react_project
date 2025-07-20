// src/components/Toast.jsx
function Message({ message, show }) {
  return (
    show && (
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded shadow-lg transition-all duration-500 z-50">
        {message}
      </div>
    )
  );
}

export default Message;
