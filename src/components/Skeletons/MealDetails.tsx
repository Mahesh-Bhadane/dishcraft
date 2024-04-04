const MealDetailsSkeleton = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="w-3/4 h-6 mx-auto bg-gray-300 rounded-md"></div>{" "}
      <div className="w-full mb-4 bg-gray-300 h-96 rounded-xl"></div>{" "}
      <div className="flex justify-between mb-6 space-x-4">
        <div className="w-1/4 h-4 bg-gray-300 rounded"></div>{" "}
        <div className="w-1/4 h-4 bg-gray-300 rounded"></div>{" "}
      </div>
      <div className="overflow-x-auto rounded-lg">
        <div className="w-full table-auto">
          <div>
            <div>
              <div className="px-6 py-3 bg-gray-300 rounded-md"></div>{" "}
              <div className="px-6 py-3 bg-gray-300 rounded-md"></div>{" "}
            </div>
          </div>
          <div className="bg-white">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div key={index}>
                  <div className="px-6 py-2">
                    <div className="w-3/4 h-4 bg-gray-300 rounded"></div>{" "}
                  </div>
                  <div className="px-6 py-2">
                    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>{" "}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="pt-4 mt-6 border-t border-gray-200">
        <div className="w-3/4 h-4 mb-2 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-4 mb-2 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default MealDetailsSkeleton;
