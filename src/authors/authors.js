import React from "react";
import "./authors.css";
import { getDefaultNormalizer } from "@testing-library/react";

export default function Home() {
    return (
        <div className="Authors">
            <div className="lander">
                <h1>Authors</h1>
                <p>Here are the authors.</p>
            </div>
        </div>
    );
}