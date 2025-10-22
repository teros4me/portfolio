const Progress = ({ value }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-500 rounded-full h-2 dark:h-1 overflow-hidden w-full">
      <div
        className="h-full bg-mygreen-55 dark:bg-green-50 transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default Progress;
