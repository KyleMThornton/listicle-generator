"use client"

import { useState } from "react";
import Listicle from "./listicle";

export default function ListicleGenerator() {
    const [redditData, setRedditData] = useState<any>([]);

    const fetchReddit = async () => {
        const response = await fetch("api/reddit");
        setRedditData(await response.json());
      }

      const clearData = () => {
        setRedditData([]);
      }

      return (
        <div className="w-4/5">
            <div className="flex flex-col items-center">
                <button className="btn w-44 m-3" onClick={fetchReddit}>Generate</button>
                <button className="btn w-20 m-3" onClick={clearData}>Clear</button>
            </div>
            <h2 className="text-lg py-5">{redditData[0]}</h2>
            <div className="text-left">
                {redditData.map((comment: any, index: number) => { 
                    if(index > 0) {
                        return <p className="p-1" key={index}>{index}. {comment}</p>
                    }
                })}
            </div>
        </div>
      )
}