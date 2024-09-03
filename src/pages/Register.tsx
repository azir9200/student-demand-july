const RegisterForm: React.FC = () => {
  return (
    <form className="max-w-md mx-auto p-4 shadow-md bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200" />
        <p className="text-red-500 text-sm mt-1">errors.name.message</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <p>name</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
