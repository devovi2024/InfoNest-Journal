import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PurchaseComponent() {
  const [quantity, setQuantity] = useState(1);
  const [purchased, setPurchased] = useState(false);

  const products = [
    {
      id: 1,
      name: "Mindful Product 🧘‍♂️",
      image: "https://source.unsplash.com/400x250/?meditation,calm",
      price: 29.99,
      description: "You deserve moments of peace. Let this product bring you closer to your calm.",
    },
  ];

  const navigate = useNavigate();

  const handlePurchase = () => {
    setPurchased(true);
    toast.success("🎉 Your joy is on its way! Thank you for trusting us.");
  };

  return (
    <section className="flex mt-4 justify-center px-4 ">
      {products.map((product) => {
        const total = (product.price * quantity).toFixed(2);
        return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative max-w-sm w-full p-6 bg-white/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-white"
          >
            <button
              onClick={() => navigate(-1)}
              className=" mt-4 mb-6 bg-white shadow-md text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-100 transition"
            >
              ← Back
            </button>

            <motion.div
              animate={{ rotate: [0, -3, 3, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-5 -right-5 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow"
            >
              Only 3 Left!
            </motion.div>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl shadow-sm"
            />

            <h2 className="text-2xl font-bold text-indigo-800 mt-4">
              {product.name}
            </h2>
            <p className="text-gray-700 text-sm mt-1">{product.description}</p>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-green-700">${total}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-lg"
                >
                  −
                </button>
                <span className="font-semibold text-indigo-800">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handlePurchase}
              className="w-full mt-5 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-xl transition"
            >
              Buy Now — Be Happier 😊
            </motion.button>
          </motion.div>
        );
      })}

      {/* Toast Notifications */}
      <ToastContainer 
        position="bottom-center" 
        autoClose={3000} 
        hideProgressBar 
        newestOnTop 
        closeButton={false} 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />

      {/* Modal */}
      {purchased && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-11/12 max-w-md">
            <h3 className="text-2xl font-bold text-green-700 mb-2">✅ Purchase Successful!</h3>
            <p className="text-gray-600">Your peaceful journey begins now. Check your email for confirmation. 💌</p>
            <button
              onClick={() => setPurchased(false)}
              className="mt-4 px-5 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
