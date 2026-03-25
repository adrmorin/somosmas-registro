import os

struct = {
    "public": {
        "assets": {
            "images": {},
            "icons": {}
        },
        "index.html": None,
        "favicon.ico": None,
    },
    "src": {
        "assets": {
            "images": {},
            "icons": {},
            "fonts": {}
        },
        "components": {
            "common": {
                "Button": {
                    "Button.jsx": "export default function Button() { return <button></button>; }",
                    "Button.css": "/* Button styles */",
                    "index.js": "export { default as Button } from './Button';",
                },
                "Input": {},
                "Modal": {},
                "Card": {}
            },
            "layout": {
                "Header": {},
                "Sidebar": {},
                "Footer": {},
                "MainLayout": {}
            },
            "features": {
                "UserProfile": {},
                "Dashboard": {},
                "ProductList": {}
            }
        },
        "pages": {
            "Home": {
                "Home.jsx": "export default function Home() { return <div>Home</div>; }",
                "Home.css": "/* Home styles */",
            },
            "About": {},
            "Contact": {},
            "NotFound": {}
        },
        "services": {
            "api.js": "export const api = {};",
            "authService.js": "export const login = () => {};",
            "productService.js": "export const getProducts = () => {};",
        },
        "hooks": {
            "useAuth.js": "export function useAuth() { return {}; }",
            "useFetch.js": "export function useFetch(url) { return { data: null }; }",
            "useLocalStorage.js": "export function useLocalStorage(key, val) { return [val, () => {}]; }",
        },
        "context": {
            "AuthContext.jsx": "import { createContext } from 'react';\n\nexport const AuthContext = createContext();",
            "ThemeContext.jsx": "import { createContext } from 'react';\n\nexport const ThemeContext = createContext();",
            "AppContext.jsx": "import { createContext } from 'react';\n\nexport const AppContext = createContext();",
        },
        "utils": {
            "helpers.js": "// Helpers function",
            "constants.js": "export const API_URL = 'http://localhost';\n",
            "formatters.js": "// Format helpers",
            "validators.js": "// Validation functions",
        },
        "styles": {
            "globals.css": "/* Global styles */",
            "variables.css": ":root { --primary-blue: #1a237e; --accent-orange: #ff6d00; }",
            "reset.css": "/* CSS Reset */",
            "animations.css": "/* Animations */",
        },
        "routes": {
            "AppRouter.jsx": "export default function AppRouter() { return null; }",
        },
        "App.jsx": "import React from 'react';\n\nexport default function App() {\n  return <div>Welcome to React App</div>;\n}",
        "App.css": "/* App CSS */",
        "main.jsx": "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport './index.css';\n\nReactDOM.createRoot(document.getElementById('root')).render(<App />);",
        "index.css": "/* Main CSS */\n@import './styles/variables.css';\n",
    }
}

def create_structure(base_path, d):
    for name, content in d.items():
        path = os.path.join(base_path, name)
        if isinstance(content, dict):
            os.makedirs(path, exist_ok=True)
            create_structure(path, content)
        else:
            if not os.path.exists(path):
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content if content is not None else "")

create_structure('.', struct)
