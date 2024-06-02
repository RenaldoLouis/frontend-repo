"use client";
import ReduxProvider from "@/redux/redux-provider";
import AuthUpdater from "./auth-updater";
import AuthViewer from "./auth-viewer";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export default function Home() {
  return (
    <ReduxProvider>
      <main style={{ width: '100vw', height: '100vh' }}>
        <AuthUpdater />
        <AuthViewer />
      </main>
    </ReduxProvider>
  );
}