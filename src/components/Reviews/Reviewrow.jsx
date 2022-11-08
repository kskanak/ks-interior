import React from "react";

const Reviewrow = ({ review }) => {
  const {
    comments,
    email,
    image,
    name,
    ratings,
    service_id,
    service_name,
    _id,
  } = review;
  console.log(review);
  return (
    <tr>
      <th>
        <label>
          <button className="px-3 py-1 rounded-lg hover:bg-red-700 text-white bg-red-500">
            X
          </button>
        </label>
      </th>
      <td>
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
      </td>
      <td className="w-24">
        <p className="text-xs">
          {comments.length > 50 && comments.slice(0, 100)}...
        </p>
        <br />
        <span className="badge badge-ghost badge-sm">Ratings : {ratings}</span>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default Reviewrow;
