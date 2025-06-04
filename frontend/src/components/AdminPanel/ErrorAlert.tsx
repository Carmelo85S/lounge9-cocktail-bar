interface Props {
  message: string;
}

const ErrorAlert: React.FC<Props> = ({ message }) => (
  <div className="bg-red-100 border border-red-300 text-red-800 p-4 rounded mb-6">
    <strong>Error:</strong> {message}
  </div>
);

export default ErrorAlert;
