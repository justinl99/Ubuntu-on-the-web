import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Ubuntu on the web</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Ubuntu on the web" />
            <meta name="description"
                content="Ubuntu on the web" />
            <meta name="author" content="JustinL" />
            <meta name="keywords"
                content="justinl ubuntu, ubuntu on the web, ubuntu web, ubuntu justinl, linux web, justinl computer, justin lewis, justinl ubuntu, ubuntu on the web justinl" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/ubuntu-4-logo.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Ubuntu on the web" />
            <meta itemProp="description"
                content="Ubuntu on the web" />
            <meta itemProp="image" content="images/logos/ubuntu-4-logo.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Ubuntu on the web" />
            <meta name="twitter:description"
                content="Ubuntu on the web" />
            <meta name="twitter:site" content="JustinL" />
            <meta name="twitter:creator" content="JustinL" />
            <meta name="twitter:image:src" content="images/logos/ubuntu-4-logo.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Ubuntu on the web" />
            <meta name="og:description"
                content="Ubuntu on the web" />
            <meta name="og:image" content="images/logos/ubuntu-4-logo.png" />
            <meta name="og:url" content="https://github.com/hockerdiscord" />
            <meta name="og:site_name" content="JustinL" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/ubuntu-4-logo.png" />
            <link rel="apple-touch-icon" href="images/logos/ubuntu-4-logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
