import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Reviewrow = ({ review, handleDelete }) => {
  const {
    comments,
    email,
    image,
    time,
    ratings,
    service_id,
    service_name,
    _id,
  } = review;

  return (
    <tr>
      <td>
        <label>
          <button
            className="px-3  rounded-lg  border border-red-600 py-2 hover:text-red-700 hover:bg-slate-200"
            onClick={() => handleDelete(_id)}
          >
            <FaTrash />
          </button>
        </label>
      </td>
      <th>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service_name} </div>
            <div className="text-sm opacity-50"> Service_id : {_id}</div>
          </div>
        </div>
      </th>

      <td>
        <p className="text-xs" title={comments}>
          {comments.length > 60 ? comments.slice(0, 50) : comments}...
        </p>

        <span className="badge badge-ghost badge-sm">Ratings : {ratings}</span>
      </td>
      <td className="w-24">
        <span className="badge badge-ghost badge-sm">
          {time ? time : "N/A"}
        </span>
      </td>

      <th>
        <Link to={`/update/${_id}`}>
          <button className=" rounded-lg  border border-green-400 btn-sm  hover:text-green-700">
            <FaPen />
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default Reviewrow;
