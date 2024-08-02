
import { useState } from "react";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log(formData);
      // Add logic to handle the form submission like sending data to a server
  };

  return (
      <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
          <div className="flex justify-center">
              <form onSubmit={handleSubmit} className="w-full max-w-lg">
                  <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                              Name
                          </label>
                          <input type="text" name="name" value={formData.name} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" required />
                      </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                              Email
                          </label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" required />
                      </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                              Message
                          </label>
                          <textarea name="message" value={formData.message} onChange={handleChange} className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" required></textarea>
                      </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                          <button type="submit" className="btn btn-primary">
                              Send Message
                          </button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  );
};

export default Contact