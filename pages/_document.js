import {Html, Head, Main, NextScript} from 'next/document'
import {useState, useEffect} from "react";

export default function Document() {
    return (
        <Html className={`h-full`}>
            <Head/>
            <body className="h-full">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
