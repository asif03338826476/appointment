"use client";
import React, { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [formData, setFormData] = useState<{}>({
    name: "",
    phone: "",
    hospital: "",
    time: "",
  });

  return (
    <div>
      <div className="w-screen">
        <div className="relative mx-auto my-10 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/80 py-14 text-center shadow-xl shadow-gray-300">
          <h1 className="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">
            Book an appointment with
          </h1>
          <p className=" mt-6 text-xl font-medium text-white">
            Dr Waqas Ashfaq{" "}
            <span className="font-bold text-white">(Child Specialist)</span>
          </p>

          <img
            className="absolute  top-0 left-0 -z-10 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>

        <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
          <div className="grid max-w-xl">
            <p className="font-serif text-xl font-bold text-blue-900">Name</p>
            <input
              type="text"
              placeholder="Enter Name Here"
              className="p-2 border border-blue-900 rounded-md mt-2"
            />
          </div>
          <div className="grid max-w-xl mt-4 ">
            <p className="font-serif text-xl font-bold text-blue-900">
              Phone Number
              <span className="text-[12px] pl-2 -mt-1">
                Format:03xx-xxxxxxx
              </span>
            </p>
            <input
              type="number"
              placeholder="Enter Phone Number Here"
              className="p-2 border border-blue-900 rounded-md mt-2 "
            />
          </div>
          <div className="">
            <p className="font-serif text-xl mt-4 font-bold text-blue-900">
              Select Hospital
            </p>
            <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  checked
                />
                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>
                <label
                  className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white"
                  htmlFor="radio_1"
                >
                  <span className="mt-2- font-medium">City Hospital</span>
                  <span className="text-xs uppercase">30 min</span>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                />
                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>

                <label
                  className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white"
                  htmlFor="radio_2"
                >
                  <span className="mt-2 font-medium">Raazi Hospital</span>
                  <span className="text-xs uppercase">30 min</span>
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <p className="mt-8 font-serif text-xl font-bold text-blue-900">
              Select a time
            </p>
            <div className="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
                12:00
              </button>
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
                14:00
              </button>
              <button className="rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white active:scale-95">
                09:00
              </button>
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
                12:00
              </button>
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
                15:00
              </button>
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
                12:00
              </button>
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
                14:00
              </button>
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
                12:00
              </button>
            </div>
          </div>

          <button className="mt-8 w-56 rounded-full border-8 border-emerald-500 bg-emerald-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1">
            Book Now
          </button>
        </div>
      </div>
      <script src="https://unpkg.com/flowbite@1.5.2/dist/datepicker.js"></script>
    </div>
  );
};

export default page;
