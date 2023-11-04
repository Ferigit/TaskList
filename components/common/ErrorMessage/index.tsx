interface Props {
  error?: string;
}

const ErrorMessage = ({ error }: Props) => {
  if (!error) return null;

  return (
    <div className="w-full grid place-content-start">
      <p className="text-red-400 text-sm mt-1">{error}</p>
    </div>
  );
};
export default ErrorMessage;
