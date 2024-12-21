import  { useRef, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Create mailto link
    const mailtoLink = `mailto:abhishekrock796@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Optionally reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto py-20 px-6" ref={contactRef}>
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <form
        className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Name
          </label>
          <input

            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="text-black w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full text-black px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-black border border-gray-300 dark:border-gray-700 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
