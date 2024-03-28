import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Laptop() {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/laptop/get");
        const data = await response.json();
        setLaptops(data[0].laptop);
      } catch (error) {
        console.error("Error fetching laptop data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {laptops.map((laptop) => (
        <Link to={`/laptop/${laptop._id}`}>
          <div
            key={laptop._id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={laptop.img_link}
              alt={laptop.name}
              className="w-full h-96"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{laptop.name}</h2>
              <p>Price: {laptop["price(in Rs.)"]} Rs.</p>
              <p>Processor: {laptop.processor}</p>
              <p>RAM: {laptop.ram}</p>
              <p>Operating System: {laptop.os}</p>
              <p>Storage: {laptop.storage}</p>
              <p>Display (in inches): {laptop.display}</p>
              <p>Rating: {laptop.rating}</p>
              <p>No. of Ratings: {laptop.no_of_ratings}</p>
              <p>No. of Reviews: {laptop.no_of_reviews}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Laptop;
