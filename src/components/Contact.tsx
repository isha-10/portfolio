import Head from 'next/head';

const Contact = () => {
  return (
    <div className="min-h-screen bg-">
          <Head>
        <title>Contact Me</title>
        <meta name="description" content="Get in touch with me via the contact form." />
      </Head>

      <div className="container mx-auto py-12 px-4 ">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
        <p className="text-center text-lg text-white mb-8">
          Feel free to reach out via the form below, or connect with me on social media.
        </p>

        <form className="max-w-lg mx-auto bg-pink-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
