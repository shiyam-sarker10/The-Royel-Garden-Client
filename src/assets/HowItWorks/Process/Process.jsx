import React from "react";
import { Tab, Tabs } from "./../Tab/Tab";
import WorksCards from "../Cards/WorksCards";

const Process = () => {
  return (
    <Tabs>
      <Tab
        component={
          <div className="flex gap-4 p-7 text-white rounded-xl  xl:flex-row justify-around shadow-md bg-[#222242] flex-col">
            <div>
              <h2 className="sm:text-4xl text-3xl xl:max-w-[200px] font-bold">
                Create An Account
              </h2>
              <p className="mt-3">
                First you need have account for login then you can see dashboard
                , we make sign up easy and this basic , same like you make
                account social media . and dont worry all details is safe , we
                not share your details to others.
              </p>
            </div>
            <img
              src="https://i.ibb.co/DMSR7Cv/signup-qxrolt.png"
              alt="Image 1"
            />
          </div>
        }
      >
        <div className="flex justify-start items-center gap-3">
          <p className="md:px-5 px-3 py-1 md:py-3 font-bold rounded-full bg-[#04C47F]">
            1
          </p>
          <p className="md:text-lg sm:text-base text-sm">Create Account</p>
        </div>
      </Tab>
      <Tab
        component={
          <div className="flex gap-4 p-7 text-white rounded-xl  xl:flex-row justify-around shadow-md bg-blue-500 flex-col">
            <div>
              <h2 className="sm:text-4xl text-3xl xl:max-w-[200px] font-bold">
                Book Rooms
              </h2>
              <p className="mt-3">
                Second you need deposit fund to your account in bulkfollows
                deposit iseasy and secure , and we have much payment channel for
                you. For deposit please go to{" "}
                <span className="text-[#0ABB85]">
                  “https://growfollows.com/addfunds”
                </span>
                you can find “Add funds” at slidebar
              </p>
            </div>
            <img
              src="https://i.ibb.co/2Y7wD4P/addfunds-lain7u.png"
              alt="Image 1"
            />
          </div>
        }
      >
        <div className="flex justify-start items-center gap-3">
          <p className="md:px-5 px-3 py-1 md:py-3 font-bold rounded-full bg-[#04C47F]">
            2
          </p>
          <p className="md:text-lg ">Book Rooms</p>
        </div>
      </Tab>
      <Tab
        component={
          <div className="flex gap-8 p-7 text-white rounded-xl   justify-around  bg-blue-900 shadow-md flex-col">
            <div className="flex gap-4 xl:flex-row flex-col">
              <div className="">
                <h2 className="sm:text-4xl text-3xl xl:max-w-[250px] font-bold">
                  Create Order
                </h2>
                <p className="mt-3">
                  Third after you have balance in your account , so now you can
                  place orders in form , see step by step . you can check
                  <span className="text-[#0ABB85]">
                    “https://growfollows.com/addfunds”
                  </span>{" "}
                  to see all service and price.
                </p>
              </div>
              <img
                src="https://i.ibb.co/Tvj9YTj/step-3-kwagjs.png"
                alt="Image 1"
              />
            </div>
            <WorksCards></WorksCards>
          </div>
        }
      >
        <div className="flex justify-start items-center gap-3">
          <p className="md:px-5 px-3 py-1 md:py-3 font-bold rounded-full bg-[#04C47F]">
            3
          </p>
          <p className="md:text-lg ">Book Rooms</p>
        </div>
      </Tab>
      <Tab
        component={
          <div className="flex gap-4 p-7 text-white rounded-xl  xl:flex-row justify-around 0 bg-[#222242] shadow-md flex-col">
            <img
              src="https://i.ibb.co/bLQC1Z6/step-4-jrmfqa.png"
              alt="Image 1"
            />
          </div>
        }
      >
        <div className="flex justify-start items-center gap-3">
          <p className="md:px-5 px-3 py-1 md:py-3 font-bold rounded-full bg-[#04C47F]">
            4
          </p>
          <p className="md:text-lg ">Order History</p>
        </div>
      </Tab>
    </Tabs>
  );
};

export default Process;
