import React from 'react';
import { Loader2 } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';

const ContactForm = () => {
  const {
    fullName,
    setFullName,
    workEmail,
    setWorkEmail,
    company,
    setCompany,
    projectBudget,
    setProjectBudget,
    projectGoals,
    setProjectGoals,
    formStatus,
    errorMessage,
    handleSubmit
  } = useContactForm();

  return (
    <div id="get-in-touch" className="bg-[#1a202c] p-8 rounded-lg shadow-xl border border-white" style={{scrollMarginTop: '5rem'}} /* TTD: Implement as class */>
      <h3 className="text-xl font-bold text-white mt-1 mb-6 text-center">Get In Touch</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <FormField
          id="fullName"
          label="Your full name *"
          value={fullName}
          onChange={setFullName}
          placeholder="Your Full Name"
          required
        />
        
        <FormField
          id="workEmail"
          label="Your Email *"
          type="email"
          value={workEmail}
          onChange={setWorkEmail}
          placeholder="Your Email Address"
        />
        
        <FormField
          id="companyname"
          label="Company Name*"
          value={company}
          onChange={setCompany}
          placeholder="Your Company Name"
        />
        
        <div>
          <label htmlFor="projectBudget" className="block text-gray-300 text-base font-semibold mb-2">
            Project Budget 
          </label>
          <div className="relative">
            <select
              id="projectBudget"
              name="projectBudget"
              value={projectBudget}
              onChange={(e) => setProjectBudget(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white appearance-none focus:outline-none focus:border-blue-500"
            >
              <option value="">Estimated Budget</option>
              <option value=" ">I don't know yet</option>
              <option value=" ">I'd rather not say</option>
              <option value="<£500">Less than £500</option>
              <option value="£1000 - £5000">£1000 - £5000</option>
              <option value="£5000-£10000 ">£5000 - £10000</option>
              <option value=">10000 ">Above £10000</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg> 
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="projectGoals" className="block text-gray-300 text-base font-semibold mb-2">
            Project Goals *
          </label>
          <textarea
            id="projectGoals"
            name="projectGoals"
            rows={5}
            placeholder="Tell us about your idea…"
            value={projectGoals}
            onChange={(e) => setProjectGoals(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {formStatus === 'submitting' && (
          <p className="md:col-span-2 text-center text-blue-400">Submitting...</p>
        )}
        {formStatus === 'success' && (
          <p className="md:col-span-2 text-center text-green-400">Submitted!</p>
        )}
        {formStatus === 'error' && (
          <p className="md:col-span-2 text-center text-red-400">{errorMessage}</p>
        )}

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            disabled={formStatus === 'submitting'}
            className="bg-[#BBFEFF] text-black px-8 py-4 rounded-lg font-semibold 
                      hover:bg-cyan-300 transition-colors duration-300 
                      shadow-lg inline-flex items-center justify-center space-x-2"
          >
            {formStatus === 'submitting' ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
              </>
            ) : (
              'Send Enquiry'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

const FormField: React.FC<{
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}> = ({ id, label, value, onChange, type = 'text', placeholder, required = false }) => (
  <div>
    <label htmlFor={id} className="block text-gray-300 text-base font-semibold mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />
  </div>
);

export default ContactForm;