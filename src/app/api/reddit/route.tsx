import { NextRequest, NextResponse } from 'next/server';

export async function GET(req:NextRequest, res:NextResponse) {
    const response = await fetch("https://www.reddit.com/r/AskReddit.json?limit=10", { cache: 'no-store' });
    const todaysTopPost = await response.json();

    const randomNum = Math.floor(Math.random() * 5);
    
    const postLink = await todaysTopPost.data.children[randomNum].data.permalink;
    const postTitle = await todaysTopPost.data.children[randomNum].data.title;
    const secondResponse = await fetch(`https://www.reddit.com${postLink}.json?limit=12`, { cache: 'no-store' });

    const commentsData = await secondResponse.json();
    const top10commentsObj = commentsData[1].data.children;

    let titleAndTop10comments = [];
    titleAndTop10comments.push(postTitle);
    for(let x = 0; x < 8; x++) {
        titleAndTop10comments.push(top10commentsObj[x].data.body);
    }

    return NextResponse.json(titleAndTop10comments);
}