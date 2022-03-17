export function SearchBar(props) {
  return (
    <div className="">      
          <div className="shadow-sm sm:rounded-md sm:overflow-hidden">
            <div className="px-0 py-0 pb-0 bg-white space-y-1 sm:p-1">
              <div className="grid grid-cols-1 gap-6">
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex rounded-md shadow-xs">
                    <input
                      type="text"
                      area="searchParams"
                      className="px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
