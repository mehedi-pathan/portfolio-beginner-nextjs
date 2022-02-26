import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/> 
            <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
            </Head>
            
            <body className="bg-fixed bg-gradient-to-r from-gray-500 to-blue-100 dark:bg-black dark:text-white dark:from-gray-900 dark:to-blue-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}