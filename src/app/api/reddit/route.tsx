import { NextRequest, NextResponse } from 'next/server';

export async function GET(req:NextRequest, res:NextResponse) {
    const response = await fetch("https://www.reddit.com/r/AskReddit.json?limit=1");
    const todaysTopPost = await response.json();
    
    const postLink = await todaysTopPost.data.children[0].data.permalink;
    const secondResponse = await fetch(`https://www.reddit.com${postLink}.json?limit=14`);

    const comments = await secondResponse.json();
    const top10commentsObj = comments[1].data.children;

    let postTitle = todaysTopPost.data.children[0].data.title;
    let titleAndTop10comments = [];
    titleAndTop10comments.push(postTitle);
    for(let x = 0; x < 10; x++) {
        titleAndTop10comments.push(top10commentsObj[x].data.body);
    }

    return NextResponse.json(titleAndTop10comments);
}