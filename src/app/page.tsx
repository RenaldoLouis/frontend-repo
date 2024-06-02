"use client";
import ReduxProvider from "@/redux/redux-provider";
import PageUpdater from "./page-updater";
import PageViewer from "./page-viewer";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {
  return (
    <ReduxProvider>
      <main style={{ position: "absolute", top: "50%", left: "50%", transform: "translateY(-50%) translateX(-50%)" }}>
        <PageUpdater />
        <PageViewer />
      </main>
    </ReduxProvider>
  );
}