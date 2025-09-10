import { useState, useEffect } from "react";

export const WelcomeHint = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show hint after a short delay
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    // Hide hint after showing for a while
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div></div>
  );
};