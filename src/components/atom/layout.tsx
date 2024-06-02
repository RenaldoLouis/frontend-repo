import { Inter } from "next/font/google";
import "../../app/globals.css";
// import Navbar from "@/components/molecules/Navbar";
import commonStyles from "@/styles/common.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function LayoutHome({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* <Navbar /> */}
            <div className={commonStyles.pageContainer}>
                {children}
            </div>
        </>
    );
}
