'use client';

import { MusicProvider } from "@/contexts/MusicContext";
import { ReactNode } from "react";


export function Providers({ children }: { children: ReactNode }) {
    return (
        <MusicProvider>{children}</MusicProvider>
    );
}