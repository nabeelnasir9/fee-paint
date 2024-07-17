export const trackAddToCart = () => {
  fbq("track", "AddToCart");
};

export const trackGenerateButtonClicked = () => {
  fbq("track", "GenerateButtonClicked");
};

export const trackCheckoutButtonClicked = () => {
  fbq("track", "CheckoutButtonClicked");
  fbq("track", "InitiateCheckout");
};

export const trackFormSubmission = () => {
  fbq("track", "PopupFormSubmitted");
};

