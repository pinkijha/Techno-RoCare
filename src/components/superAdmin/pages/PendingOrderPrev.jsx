const PendingOrderPrev = ({ order, onBack }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold mb-4">Preview Order</h2>
      <p><strong>Order ID:</strong> {order?.orderId}</p>
      <p><strong>Order Date:</strong> {order?.orderDate}</p>
      <p><strong>Service Partner:</strong> {order?.partnerName}</p>
      
      <button
        onClick={onBack}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Back
      </button>
    </div>
  );
};
export default PendingOrderPrev;
