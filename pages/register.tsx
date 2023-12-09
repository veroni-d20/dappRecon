import Layout from "@/components/layout";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function home() {
  return (
    <Layout pageTitle="Register dapp">
      <div>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Dapp details
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="dapp-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    dapp name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="dapp-name"
                      id="dapp-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="contractAddress"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contract Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="contractAddress"
                      id="contractAddress"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Chain Id
                    </legend>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="mantle"
                          name="chainId"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-400"
                        />
                        <label
                          htmlFor="mantle"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          80021
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="polygonZkevm"
                          name="chainId"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-400"
                        />
                        <label
                          htmlFor="polygonZkevm"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          800001
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
