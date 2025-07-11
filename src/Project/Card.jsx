import React from "react";

const Card = ({ image, library, version, description, license }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between">
      <img
        src={image}
        alt={version}
        className="w-full h-[160px] object-cover bg-white p-2"
      />
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase font-medium mb-1">
          {library} /
        </p>
        <h2 className="text-md font-semibold leading-tight mb-2">{version}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="flex items-center justify-between p-4 border-t text-sm text-gray-500">
        <span className="text-green-500 text-lg">●</span>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">🌐</span>
          <span>{license}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-700">♡</button>
      </div>
    </div>
  );
};

export default Card;
