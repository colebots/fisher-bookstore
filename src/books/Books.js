import React from "react";
import "./Books.css";
import { getDefaultNormalizer } from "@testing-library/react";

export default function Home() {
    return (
        <div className="Books">
            <div className="lander">
                <h1>Home</h1>
                <p>Here are the books.</p>
            </div>
        </div>
    );
}