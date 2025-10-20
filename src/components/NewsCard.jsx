import React from "react";
import { format } from "date-fns";
import { FaStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    id
  } = news;
 // Create an array of stars based on the rating number
  const stars = Array.from({ length: rating.number }, (_, i) => i + 1);
  return (
    <div className=" rounded-2xl shadow-md bg-white overflow-hidden mb-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex space-x-3 text-gray-500 text-lg">
          <FaBookmark className="cursor-pointer hover:text-blue-500" />
          <FaShareAlt className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full  object-cover rounded-xl mb-3"
        />
        <p className="text-gray-600 text-sm leading-relaxed">
          {details.slice(0, 180)}...
          <Link to={`/news-details/${id}`}  className="text-blue-500 font-medium cursor-pointer">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t text-gray-600 text-sm">
       
        {/* Center: Dynamic Rating */}
        <div className="flex items-center space-x-1 text-orange-500">
          {stars.map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="font-medium text-gray-700 ml-1">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Right: Views */}
        <div className="flex items-center space-x-1 text-gray-600">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    
    </div>
  );
};

export default NewsCard;
