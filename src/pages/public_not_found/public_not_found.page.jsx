import React from "react";
import { Link } from "react-router-dom";

const PublicNotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-2xl mt-4 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600 text-xl underline hover:text-blue-800">
        ← Go Back Home
      </Link>
    </div>
  );
};

export default PublicNotFoundPage;