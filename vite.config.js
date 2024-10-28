import { defineConfig } from "vite";

export default defineConfig({
    root: "./src", // root directory of the project
    build: {
        outDir: "../dist", // build output directory
        emptyOutDir: true, // clear outDir before every build
        rollupOptions: {
            input: "./src/index.html", // default is 'index.html'
        }
    },
    server: {
        port: 3000, // default is 5173
        open: true, // open browser window automatically
    }
});