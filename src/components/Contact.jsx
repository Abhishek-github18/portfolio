const Contact = () => {
  return (
    <div id="contact" className="container mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <p className="text-center text-lg mb-8">
        I'm always open to discussing new opportunities, collaborations, or just connecting. You can reach out to me through any of the following:
      </p>

      <div className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</p>
          <a href="mailto:abhishekrock796@gmail.com" className="text-blue-500 hover:text-blue-700 transition duration-300">
            abhishekrock796@gmail.com
          </a>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/abhishek-anand-365b06193/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-700 transition duration-300"
          >
            {/* < className="mr-2" /> */}
            linkedin.com/in/abhishek-anand-365b06193/
          </a>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Social Media</p>
          <p className="text-gray-700 dark:text-gray-300">
            Feel free to reach out through other channels as well if you'd like to connect further!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
