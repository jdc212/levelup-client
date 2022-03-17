export function SearchBar(props) {
  return (
    <div className="bg-gray-100">      
          <div className="w-130 shadow sm:rounded-md sm:overflow-hidden">
            <div className="w-130 px-4 py-2 bg-white space-y-1 sm:p-1">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <div className="mt-1 w-130 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      area="searchParams"
                      className="w-130 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder={props.placeholder}
                      onKeyUp={(event) => {
                        props.filterAPI(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-3"></div>
      </div>
    </div>
  );
}
