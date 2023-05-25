import React from 'react'
import { Footer, Header } from '../shared'

type Props = {}

export const Layout = (children: Props) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}