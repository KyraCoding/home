"use client"

import { useState, useEffect } from "react";
import Card from "./Card";

export default function Display() {
    const [divCount, setDivCount] = useState(8);

    const updateDivCount = () => {
        const width = window.innerWidth;

        // sm
        if (width < 640) setDivCount(2);

        // md
        else if (width < 768) setDivCount(2);

        // lg
        else if (width < 1024) setDivCount(8);

        // xl 
        else if (width < 1280) setDivCount(8);

        // 2xl
        else if (width < 1536) setDivCount(8);
    };

    useEffect(() => {
        updateDivCount();
        window.addEventListener("resize", updateDivCount);
        return () => window.removeEventListener("resize", updateDivCount);
    }, []);
    return (
        <div className='flex flex-wrap justify-center'>
            {Array.from({ length: divCount }, (_, i) => (
                <Card key={i} />
            ))}
        </div>
    )
}