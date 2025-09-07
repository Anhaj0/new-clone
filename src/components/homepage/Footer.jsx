import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get the latest research updates, subscribe to our newsletter
          </h2>

          <form className="max-w-2xl mx-auto mt-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-blue-800 border border-blue-600 rounded-lg p-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Last name"
                className="bg-blue-800 border border-blue-600 rounded-lg p-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-blue-800 border border-blue-600 rounded-lg p-3 mb-4 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 text-gray-600">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Guidelines</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Author guidelines</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Services for authors</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Policies and publication ethics</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Editor guidelines</a></li>
              <li><a href="#" className="hover:underline">Fee policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-800">Explore</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Articles</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Research Topics</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Journals</a></li>
              <li><a href="#" className="hover:underline">How we publish</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-800">Outreach</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Frontiers Forum</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Frontiers Policy Labs</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Frontiers for Young Minds</a></li>
              <li><a href="#" className="hover:underline">Frontiers Planet Prize</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-800">Connect</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Help center</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Emails and alerts</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Submit</a></li>
              <li><a href="#" className="hover:underline">Career opportunities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-800">Follow us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h2.667l.25-3.003H13.198v-1.5c0-.993.193-1.333 1.01-1.333h1.583v-2.5H13.8c-2.333 0-3.61 1.25-3.61 3.5v2.333H9.198v3.003h1.2v8.01Z" /></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.71-.02-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23Z" /></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" /></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 Frontiers Media S.A. All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy policy</a>
            <a href="#" className="hover:underline">Terms and conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
