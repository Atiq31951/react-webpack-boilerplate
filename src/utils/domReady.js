const { addEventListener, attachEvent } = window || {};

// run the application when both DOM is ready and page content is loaded
export const domReady = () => {
  console.log("Hello");
  return new Promise((resolve) => {
    if (addEventListener) {
      addEventListener("DOMContentLoaded", resolve);
    } else {
      attachEvent("onload", resolve);
    }
  });
};

export default domReady;
