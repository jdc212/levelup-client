export function SearchBar(props) {
  return (
    <>
      <div className="bg-gray-50">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3
                  className="text-lg font-medium leading-6 text-gray-900"
                  id="search"
                >
                  Search Customer Profile
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-4 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <div className="flex rounded-md shadow-xs">
                        <input
                          type="text"
                          area="searchParams"
                          className="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            </div>
            <div className="hidden sm:block py-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </>
  );
}
