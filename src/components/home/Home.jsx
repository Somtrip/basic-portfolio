import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-full w-full rounded-3xl " src="/images/newfile.png" alt="image2" />
            </div>
            <div className="text-center text-xl sm:text-xl py-10 font-medium">
                Recommanded Exams
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="h-64 rounded-lg bg-gray-200">
                <a
  href="/jeemain"
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            JEE Main 2023
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-600">National Testing Agency</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt="Paul Clapton"
        src="/images/ntaimg.jpg"
        className="h-16 w-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div className="mt-4">
    <p className="max-w-[40ch] text-sm text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
      maiores deleniti consectetur nobis et eaque.
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">More than 20 lakh</dt>
      <dd className="text-xs text-gray-500">Participants</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">1200/-</dt>
      <dd className="text-xs text-gray-500">Fee</dd>
    </div>
  </dl>
                </a>
                </div>
                <div className="h-64 rounded-lg bg-gray-200">
                <a
  href="/jeemain"
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            Civil Services 2023
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-600">Union Public Service Commission</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt="Paul Clapton"
        src="/images/upsc.png"
        className="h-16 w-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div className="mt-4">
    <p className="max-w-[40ch] text-sm text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
      maiores deleniti consectetur nobis et eaque.
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">More than 15 lakh</dt>
      <dd className="text-xs text-gray-500">Participants</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">₹1500/-</dt>
      <dd className="text-xs text-gray-500">Fee</dd>
    </div>
  </dl>
                </a>
                </div>

                <div className="h-64 rounded-lg bg-gray-200">
                <a
  href="/jeemain"
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            SSC CGL 2023
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-600">Staff Selection Commission</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt="Paul Clapton"
        src="/images/ssc.png"
        className="h-16 w-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div className="mt-4">
    <p className="max-w-[40ch] text-sm text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
      maiores deleniti consectetur nobis et eaque.
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">More than 10 lakh</dt>
      <dd className="text-xs text-gray-500">Participants</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">₹1000/-</dt>
      <dd className="text-xs text-gray-500">Fee</dd>
    </div>
  </dl>
                </a>
                </div>
            </div>

  


            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium"></h1>
        </div>
    );
}


 