import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function OneMobile() {
  const { id } = useParams();
  const [mobile, setMobile] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/mobile/getOne", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        });
        const data = await response.json(); // Parse the JSON response
        const posts = data[0].posts; // Extract the 'posts' array from the data
        console.log("Mobile details:", posts[0]); // Log the 'posts' array to the console
        setMobile(posts[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching mobile data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-bold mb-4">Mobile Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>ID:</span>
          <span>{mobile._id}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Brand Name:</span>
          <span>{mobile.brand_name}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Model:</span>
          <span>{mobile.model}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Price:</span>
          <span>{mobile.price}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Average Rating:</span>
          <span>{mobile.avg_rating}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>5G:</span>
          <span>{mobile.FiveG_or_not ? "Yes" : "No"}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Battery Capacity:</span>
          <span>{mobile.battery_capacity}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Extended Memory Available:</span>
          <span>{mobile.extended_memory_available ? "Yes" : "No"}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Fast Charging:</span>
          <span>{mobile.fast_charging}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Fast Charging Available:</span>
          <span>{mobile.fast_charging_available ? "Yes" : "No"}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Internal Memory:</span>
          <span>{mobile.internal_memory}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Number of Cores:</span>
          <span>{mobile.num_cores}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Number of Rear Cameras:</span>
          <span>{mobile.num_rear_cameras}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>OS:</span>
          <span>{mobile.os}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Primary Camera (Front):</span>
          <span>{mobile.primary_camera_front}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Primary Camera (Rear):</span>
          <span>{mobile.primary_camera_rear}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Processor Brand:</span>
          <span>{mobile.processor_brand}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Processor Speed:</span>
          <span>{mobile.processor_speed}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>RAM Capacity:</span>
          <span>{mobile.ram_capacity}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Refresh Rate:</span>
          <span>{mobile.refresh_rate}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Resolution Height:</span>
          <span>{mobile.resolution_height}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Resolution Width:</span>
          <span>{mobile.resolution_width}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span>Screen Size:</span>
          <span>{mobile.screen_size}</span>
        </div>
      </div>
    </div>
  );
}

export default OneMobile;
