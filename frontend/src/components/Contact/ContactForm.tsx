import { motion } from "framer-motion";

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    date: string;
    time: string;
    guests: number;
    message: string;
    type: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactForm = ({ formData, handleChange, handleSubmit }: ContactFormProps) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-md"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="text-2xl font-serif text-amber-dark font-semibold mb-6">
        Make a Reservation
      </h3>

      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <InputField
          id="name"
          label="Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />

        <InputField
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
        />

        <InputField
          id="date"
          label="Date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <InputField
          id="time"
          label="Time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <InputField
          id="guests"
          label="Number of Guests"
          type="number"
          value={formData.guests.toString()}
          onChange={handleChange}
          placeholder="e.g. 4"
          min={1}
          max={20}
          required
        />

        {/* New Event Type Dropdown */}
        <div>
          <label
            htmlFor="type"
            className="block text-sm text-night font-medium mb-1"
          >
            Type of Reservation
          </label>
          <select
            id="type"
            name="type"
            value={formData.type || ""}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-amber-dark"
          >
            <option value="">Select an option</option>
            <option value="Dinner">Dinner</option>
            <option value="Afterwork">Afterwork</option>
            <option value="Jazz Night">Jazz Night</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm text-night font-medium mb-1"
          >
            Special Requests
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any special requests or dietary requirements?"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm h-28 resize-none focus:outline-none focus:ring-amber-dark"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber text-white font-semibold py-3 rounded-md hover:bg-amber-dark transition"
        >
          Request Reservation
        </button>
      </form>
    </motion.div>
  );
};

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
}

const InputField = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false,
  min,
  max,
}: InputFieldProps) => (
  <div>
    <label htmlFor={id} className="block text-sm text-night font-medium mb-1">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      min={min}
      max={max}
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-amber-dark"
    />
  </div>
);

export default ContactForm;
