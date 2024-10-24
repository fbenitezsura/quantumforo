import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const url = 'https://api.ipdata.co?api-key=5b51ba2ea9d22f4047019e0a4f977188142d710bdaf563c28aa2b685';

    try {
        // Make the GET request
        const response = await fetch(url);

        // Check if the request was successful
        if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
        }

        // Parse the JSON from the response
        const data = await response.json();
        
        // Log the data
        console.log(data);

        return NextResponse.json({ data })

    } catch (error) {
        // Log any errors
        return NextResponse.json({ error })
    }
}