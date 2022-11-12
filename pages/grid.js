import React from "react";

const cols = [...Array(12)];

export default function grid() {
  return (
    <>
      <main className="bg-violet min-h-[20vh]">
        <div className="max-w-screen-2xl bg-yellow-base mx-auto px-[32px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[20px]">
          {cols.map((el, ind) => (
            <div key={ind} className="bg-slate-400">
              {ind + 1}
            </div>
          ))}
        </div>
        <div className="max-w-screen-2xl bg-yellow-base mx-auto px-[32px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[20px]">
          <div className="bg-green-500 col-span-4 md:col-span-4 lg:col-span-4">Hello</div>

          <div className="bg-green-500 col-span-4 md:col-span-4 row-span-2">???</div>
        </div>
      </main>
      <main className="bg-pink min-h-[20vh]">
        <div className="w-[calc(100%-64px)] bg-blue-300 mx-auto">fdsf</div>
      </main>
      <main className="bg-pink min-h-[20vh]">
        <div className="w-[calc(100%-32px)] 2xl:w-[calc(100%-32px-calc((100%-1528px)/2))] bg-blue-300 float-right">
          <div className="w-[calc(100%-32px)] 2xl:w-[calc(100%-32px-20px-calc(100%-1528px))] bg-green-300">fsdfasf</div>
        </div>
      </main>
      <main className="bg-pink min-h-[20vh]">
        <div className="w-[calc(100%-32px)] 2xl:w-[calc(100%-32px-calc((100%-1528px)/2))] bg-blue-300 float-right flex gap-[20px]">
          <div className="w-[calc(3*20px+calc(100%-32px-(7)*20px)*4/8)] lg:w-[calc(7*20px+calc(100%-32px-(11)*20px)*8/12)] 2xl:w-[calc(7*20px+(1528px-64px-220px)*8/12)]  bg-green-300">
            fsdfasf
          </div>
          <div className="flex-1 bg-green-600"></div>
        </div>
      </main>
    </>
  );
}
