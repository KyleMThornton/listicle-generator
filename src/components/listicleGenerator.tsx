"use client"

import { useState } from "react";
import Listicle from "./listicle";

export default function ListicleGenerator() {
    const [redditData, setRedditData] = useState<any>([]);

    const fetchReddit = async () => {
        const response = await fetch("api/reddit");
        setRedditData(await response.json());
      }

      return (
        <div>
            <button className="btn w-44" onClick={fetchReddit}>Generate</button>
            <h2>{redditData[0]}</h2>
            {redditData.map((comment: any, index: number) => { 
                if(index > 0) {
                    return <p key={index}>{index}. {comment}</p>
                }
            })}
        </div>
      )
}