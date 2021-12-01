import React, { useState } from 'react';

function useDarkMode () {
    const [darkMode, setDarkMode] = useState(false);
    return darkMode ? "dark-mode App" : "App"
}

export default useDarkMode