import { NextResponse } from "next/server"
import connect from '@/app/lib/db'
import Entry from '@/models/Entries';

export const GET = async (req, res) => {
    try {
        await connect();
        const entries = await Entry.find({});
        res.statusCode = 200;
        return NextResponse.json(entries);
    } catch (error) {
        console.error(error);
        return NextResponse.error(error);
    }
}