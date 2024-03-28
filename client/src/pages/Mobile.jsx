import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Mobile() {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true); // Introducing loading state

  useEffect(() => {
    // Fetch mobile data
    const fetchData = async () => {
      try {
        const response = await fetch("/api/mobile//get");
        const data = await response.json();
        setMobiles(data[0].posts);
        setLoading(false); // Data fetched, set loading to false
      } catch (error) {
        console.error("Error fetching mobile data:", error);
        setLoading(false); // Error occurred, set loading to false
      }
    };

    fetchData();
  }, []);
  // fetchMobile();
  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mobiles.map((mobile) => (
            <Link to={`/mobile/${mobile._id}`}>
              <div
                key={mobile._id}
                className="border rounded-lg overflow-hidden shadow-lg dark:bg-gray-800 dark:text-gray-200"
              >
                {console.log(
                  "this is ",
                  mobile.model,
                  " and this is id  ",
                  mobile._id
                )}
                <img
                  src={`https://via.placeholder.com/300x200?text=${mobile.model}`}
                  alt={mobile.model}
                  className="w-full"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{mobile.model}</h2>
                  <p className="text-gray-800 dark:text-gray-200">
                    Brand: {mobile.brand_name}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Price: {mobile.price}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Average Rating: {mobile.avg_rating}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Processor Speed: {mobile.processor_speed} GHz
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Battery Capacity: {mobile.battery_capacity} mAh
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    RAM Capacity: {mobile.ram_capacity} GB
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Internal Memory: {mobile.internal_memory} GB
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Screen Size: {mobile.screen_size} inches
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    OS: {mobile.os}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Primary Camera (Rear): {mobile.primary_camera_rear} MP
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Primary Camera (Front): {mobile.primary_camera_front} MP
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Resolution: {mobile.resolution_width} x{" "}
                    {mobile.resolution_height}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Mobile;
