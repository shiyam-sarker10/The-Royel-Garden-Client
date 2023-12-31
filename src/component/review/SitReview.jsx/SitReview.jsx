import React, { useContext, useEffect, useState } from 'react';
import { Button, Textarea } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import moment from 'moment';
import axios from 'axios';

const SitReview = ({ roomId }) => {
  const { user } = useContext(AuthContext);
   const [userRating, setUserRating] = useState(0);
     const handleRatingChange = (rating) => {
       setUserRating(rating);
     };

  
 
    

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const name = user?.displayName;
    const photo = user?.photoURL;
    const email = user?.email;
    const commonId = roomId;
    const timeStamp = moment(new Date()).format("L");
    console.log("time dekhaw", timeStamp)
    const rating = userRating;
    const review = { comment, name, commonId, timeStamp, rating, email, photo };
    axios.post("https://ass-11-server-eight.vercel.app/review",review)
    .then(res=>{
        window.location.reload()
    })

  };




  const [isCanReview, setIsCanReview] = useState([]);
  const [isTrue,setIsFalse] = useState(false)
  useEffect(() => {
    if (isCanReview.length == 0) {
      return setIsFalse(true);
    } else {
      return setIsFalse(false);
    }
  }, [isCanReview]);
  

  useEffect(() => {
    axios
      .get(`https://ass-11-server-eight.vercel.app/reviewBooking/${user?.email}`)
      .then((res) => {
        setIsCanReview(res.data);
      });
  }, [user]);



  return (
    <div>
      <div className=" py-5">
        <div className="w-1/2">
          <h1 className="text-3xl md:w-1/3 font-bold border-b-4 border-blue-400 text-gray-800">
            User Review
          </h1>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex md:w-96 flex-col gap-6">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`text-${
                  star <= userRating ? "blue" : "gray"
                }-500 cursor-pointer`}
                onClick={() => handleRatingChange(star)}
              />
            ))}
          </div>

          <Textarea name="comment" color="blue" label="Comment" />
          <div>
            <Button className="bg-blue-400" disabled={isTrue}>
              <input type="submit" value="Submit" className="h-full w-full" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SitReview;