export function SearchBar(props) {
  return (
    <div className="">      
          <div className="shadow-sm sm:rounded-md sm:overflow-hidden">
            <div className="px-20 py-4 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <div className="flex rounded-md shadow-xs">
                    <input
                      type="text"
                      area="searchParams"
                      className="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

