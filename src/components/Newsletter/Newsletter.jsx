import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setMessage("Thanks for subscribing!");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-1xl  text-center text-black mb-2">
        Subscribe to our Newsletter
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Get the latest updates straight to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
        />
        <button
          type="submit"
          className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Subscribe
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-green-600">{message}</p>
      )}
    </div>
  );
}
