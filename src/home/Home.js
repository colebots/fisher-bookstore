import React from "react";
import "./Home.css";
import { getDefaultNormalizer } from "@testing-library/react";

export default function Home() {
    return (
        <div className="Home">
            <div className="lander">
                <h1>Home</h1>
                <p>Welcome to Fisher Bookstore.</p>
            </div>
        </div>
    );
}