// import { useState } from "react";
// import { db } from "../../firebase/config";
// import { collection, addDoc } from "firebase/firestore";
// import { CheckCircle } from "lucide-react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     try {
//       await addDoc(collection(db, "contacts"), {
//         ...formData,
//         timestamp: new Date(),
//       });

//       setIsLoading(false);
//       setIsSubmitted(true);
//       setFormData({ name: "", email: "", message: "" });
//       setTimeout(() => setIsSubmitted(false), 3000);
//     } catch (err) {
//       console.error("Error submitting form:", err);
//       setError("Failed to send message. Please try again.");
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="space-y-6 text-center lg:text-left">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="mt-1 block w-full
//             py-4
//             rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700 dark:text-gray-300 "
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white py-4"
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="message"
//             className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//           >
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={4}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={isLoading}
//           className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
//         >
//           {isLoading ? "Sending..." : "Send Message"}
//         </button>
//       </form>

//       {isSubmitted && (
//         <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-up flex items-center gap-2">
//           <CheckCircle className="w-5 h-5" />
//           Message sent successfully!
//         </div>
//       )}
//       {error && (
//         <div className="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-up">
//           {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactForm;
