<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Create Expense
        </h3>
        <p class="mt-1 text-sm leading-5 text-gray-600">
          TODO: maybe a quote or just a description
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-2">
                <label
                  for="amount"
                  class="block text-sm font-medium leading-5 text-gray-700">Amount</label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span class="text-gray-500 sm:text-sm sm:leading-5">
                      $
                    </span>
                  </div>
                  <input
                    id="amount"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    class="mt-1 form-input block w-full py-2 px-3 pl-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                </div>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="category"
                  class="block text-sm font-medium leading-5 text-gray-700">Category</label>
                <select
                  id="category"
                  class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                  <option>Food</option>
                  <option>Bills</option>
                  <option>Transportation</option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="memo"
                  class="block text-sm font-medium leading-5 text-gray-700">Memo</label>
                <input
                  id="memo"
                  class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>

              <div class="col-span-6 sm:col-span-2">
                <label
                  for="date"
                  class="block text-sm font-medium leading-5 text-gray-700">Date</label>
                <input
                  id="date"
                  type="date"
                  class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
