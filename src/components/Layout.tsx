import Head from "next/head"
import Header from "./Header"
import { ReactNode } from 'react'

type Props = {
    title?: string,
    keywords?: string,
    description?: string,
    header?: Boolean,
    children: ReactNode
}

export default function Layout({
    title,
    keywords,
    description,
    header = true,
    children,
}: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description}></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="h-screen w-full">
                {header && <Header />}
                <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center h-[90%]">
                    {children}
                </div>
            </main>
        </>
    )
}

Layout.defaultProps = {
    "title": "Welcome to BlogSpace",
    "keywords": "development, coding, programming",
    "description": "Blogs about React, Next, Node, MongoDB and much more by Himanshu Bhardwaz"
}