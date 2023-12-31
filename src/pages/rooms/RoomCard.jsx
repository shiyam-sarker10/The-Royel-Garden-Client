import { Rating } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const RoomCard = ({ room }) => {
  const { roomImage, price, roomId } = room;
  const { id } = useParams();
  const [reviewData,setReviewData] = useState(null)

  useEffect(() => {
    axios.get(`https://ass-11-server-eight.vercel.app/review/${roomId}`)
    .then((res) => {
      setReviewData(res.data);
    });
  }, [roomId]);
  
  console.log(id);
  return (
    <div>
      <div className="relative">
        <img className="w-full h-[400px]" src={roomImage} alt="" />
        <div className="bg-light-blue-900/50 absolute inset-0 opacity-0  hover:opacity-100 duration-500">
          <div className="flex flex-col md:flex-row justify-center items-center h-full space-x-4">
            <div className="md:border-r-4 border-light-blue-400 px-2">
              <h1 className="text-xl font-bold text-white">Price: {price}</h1>
            </div>
            <div>
              <Link to={`/room/${roomId}`}>
                <button className="px-4 py-2 bg-blue-600 text-white">
                  {" "}
                  Details
                </button>
              </Link>
            </div>
            <div className="text-xl gap-x-2 flex items-center font-bold md:border-l-4 px-2 border-light-blue-400 text-white">
              <Rating value={5}></Rating> <span> ( {reviewData?.length} )</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;