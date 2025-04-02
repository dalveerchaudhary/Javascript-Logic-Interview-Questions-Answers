// Implement a debounce function to limit how often a function can fire.

// will run after 1 second of no further calls
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage
const log = () => console.log("1 second after");
const debouncedLog = debounce(log, 1000);

debouncedLog();
