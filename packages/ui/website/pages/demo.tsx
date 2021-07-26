import {ChitChat} from '@ultimate-monorepo/componets';
/* eslint-disable @next/next/no-img-element */

const Demo = () => {
  return (
    <div>
      <ChitChat />
      <div className="bg-gray-200 rounded py-16 px-12 m-16 flex flex-col items-center justify-center max-w-sm md:max-w-lg  mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-purple-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>{' '}
        <form method="post" className="mt-8 mb-4">
          <div className="mb-4">
            <label htmlFor="userEmail" className="sr-only">
              Email address
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="email"
              id="userEmail"
              placeholder="Email address"
              required
            />
          </div>
          <div>
            <label htmlFor="userEmail" className="sr-only">
              Password
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="password"
              id="userPass"
              placeholder="Password"
              required
            />
          </div>
          <div className="my-4 flex items-center">
            <input className="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
            <label htmlFor="userRemember">Remember me</label>
          </div>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Demo;
