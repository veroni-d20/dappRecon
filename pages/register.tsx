import Layout from "@/components/layout";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import axios from "axios";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function Register() {
  const [loading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputs, setInputs] = useState({
    dappName: "",
    contractAddress: "",
    description: "",
    chainId: "",
  });

  const handleInput = (event: {
    persist: () => void;
    target: { id: any; value: any };
  }) => {
    event.persist();

    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await axios.post("/api/register", inputs);
    if (res.status == 200) {
      setIsLoading(false);
      setIsSuccess(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <Layout pageTitle="Register dapp">
      <div>
        <form onSubmit={handleSubmit}>
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
                      name="dappName"
                      id="dappName"
                      onChange={handleInput}
                      value={inputs.dappName}
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
                      onChange={handleInput}
                      value={inputs.contractAddress}
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
                      onChange={handleInput}
                      value={inputs.description}
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
                          id="chainId"
                          name="mantle"
                          type="radio"
                          value={5000}
                          onChange={handleInput}
                          className="h-4 w-4 border-gray-300 text-ro-yellow focus:ring-ro-yellow"
                        />
                        <label
                          htmlFor="chainId"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          5000 - Mantle
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="chainId"
                          name="polygon"
                          value={1101}
                          onChange={handleInput}
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-ro-yellow focus:ring-ro-yellow"
                        />
                        <label
                          htmlFor="chainId"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          1101 - PolygonZkevm
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
              type="submit"
              className={`rounded-md bg-ro-black px-8 py-2.5 text-sm font-semibold text-ro-yellow shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ro-black" ${
                loading && "opacity-50 cursor-progress"
              }`}
              disabled={loading}
            >
              {loading ? (
                "Registering"
              ) : (
                <span className="flex justify-center gap-x-2">
                  Register <span aria-hidden="true">→</span>
                </span>
              )}
            </button>
          </div>
        </form>
        {isSuccess && (
          <div className="mt-6 sm:col-span-2 rounded-md bg-green-600 px-4 py-3">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircleIcon
                  className="h-5 w-5 text-green-300"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-50">
                  We have received your application!
                </p>
              </div>
            </div>
          </div>
        )}
        {isError && (
          <div className="mt-6 sm:col-span-2 rounded-md bg-red-600 px-4 py-3">
            <div className="flex">
              <div className="flex-shrink-0">
                <XCircleIcon
                  className="h-5 w-5 text-red-300"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-50">
                  Uh oh! Something went wrong. Please try again.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
