import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { AppBar } from "../AppBar/AppBar"
import { Toaster } from "react-hot-toast"
import { LayoutContainer } from "./Layout.styled"

export const Layout = () => {
    return (
        <LayoutContainer>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="bottom-right" reverseOrder={false} />
        </LayoutContainer>
    )
}