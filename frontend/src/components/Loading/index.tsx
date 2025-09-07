const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-6"></div>
      <p className="text-gray-700 text-center font-medium max-w-sm">
        Estamos processando suas respostas. Isso pode levar alguns instantes.<br />
        Obrigado pela paciência!
      </p>
    </div>
  );
};

export default Loading;
