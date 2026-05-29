function FormErrorAlert({ errorInfo }) {
  if (!errorInfo) return null;

  return (
    <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
      <div className="flex gap-3">
        <span className="text-2xl">{errorInfo.category.icon}</span>
        <div className="flex-1">
          <p className="font-semibold text-red-900 mb-1">
            {errorInfo.category.title}
          </p>
          <p className="text-red-700 text-sm mb-2">{errorInfo.message}</p>
          {errorInfo.category.recoverable && (
            <p className="text-xs text-red-600 italic">
              💡 Tip: Try checking your connection and submitting again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormErrorAlert;