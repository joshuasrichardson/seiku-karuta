import React from "react";
import { getUniqueScriptureStarts } from "./scriptures";

const UniqueStartsHelper: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {getUniqueScriptureStarts().map((uniqueStart) => (
        <div
          key={uniqueStart.uniqueStart}
          className="w-full flex flex-col gap-4 justify-between p-2 my-2 mx-4 border border-green-700 rounded-md bg-lime-100"
          style={{ maxWidth: 600 }}
        >
          <span className="font-medium">{`${uniqueStart.uniqueStart}...`}</span>
          <span>{`...${uniqueStart.torifuda}`}</span>
        </div>
      ))}
    </div>
  );
};

export default UniqueStartsHelper;
