import React, { useState } from "react";

/**
 * Simple newsletter/lead form
 * Props:
 * - title?: string
 * - subtitle?: string
 * - onSubmit?: (payload: { name: string; email: string }) => void
 */
export default function NewsletterSignup({
  title = "Get the latest research updates",
  subtitle = "Subscribe to our newsletter",
  onSubmit,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const payload = { name: name.trim(), email: email.trim() };
    if (onSubmit) onSubmit(payload);
    // fallback behavior for now:
    if (!onSubmit) alert(`Subscribed!\nName: ${payload.name}\nEmail: ${payload.email}`);
    setName("");
    setEmail("");
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-gray-600 mt-1">{subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col md:flex-row gap-3">
            <input
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full md:w-56 rounded-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-72 rounded-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="rounded-full px-6 py-2.5 bg-blue-600 text-white font-semibold hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
