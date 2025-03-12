/**
 * Utility functions for smooth scrolling
 */

/**
 * Scrolls smoothly to an element with the specified ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top of the element (default: 0)
 */
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Handles click events for anchor links to enable smooth scrolling
 * @param {Event} e - The click event
 * @param {number} offset - Optional offset from the top of the target element (default: 0)
 */
export const handleAnchorClick = (e, offset = 0) => {
  const href = e.currentTarget.getAttribute('href');
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const targetId = href.substring(1);
    scrollToElement(targetId, offset);
  }
};

/**
 * Adds smooth scrolling behavior to all anchor links on the page
 * @param {number} offset - Optional offset from the top of the target element (default: 0)
 * @returns {Function} - Cleanup function to remove event listeners
 */
export const setupSmoothScrolling = (offset = 0) => {
  const handleClick = (e) => handleAnchorClick(e, offset);
  
  // Add event listeners to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', handleClick);
  });
  
  // Return cleanup function
  return () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.removeEventListener('click', handleClick);
    });
  };
}; 