export const ERROR_CATEGORIES = {
  NETWORK: { icon: "🌐", title: "Connection Issue", recoverable: true },
  CONFIG: {
    icon: "⚙",
    title: "Service Configuration Error",
    recoverable: false,
  },
  VALIDATION: { icon: "✓", title: "Validation Error", recoverable: true },
  SERVICE: { icon: "⚠", title: "Service Unavailable", recoverable: true },
  RATE_LIMIT: { icon: "⏱", title: "Too Many Requests", recoverable: true },
  UNKNOWN: { icon: "❌", title: "Something Went Wrong", recoverable: true },
};

export const categorizeError = (error) => {
    if (!error)
      return {
        category: ERROR_CATEGORIES.UNKNOWN,
        message: "An unknown error occurred",
      };

    // Network errors
    if (
      error.message === "Network Error" ||
      error.message === "Failed to fetch" ||
      !navigator.onLine
    ) {
      return {
        category: ERROR_CATEGORIES.NETWORK,
        message:
          "Unable to connect to the email service. Please check your internet connection.",
      };
    }

    // Rate limiting
    if (error.status === 429) {
      return {
        category: ERROR_CATEGORIES.RATE_LIMIT,
        message:
          "Too many requests. Please wait a moment before sending another message.",
      };
    }

    // Configuration errors
    if (error.status === 401 || error.status === 403) {
      return {
        category: ERROR_CATEGORIES.CONFIG,
        message:
          "Email service is not properly configured. Please contact the site owner.",
      };
    }

    // Service errors
    if (error.status >= 500) {
      return {
        category: ERROR_CATEGORIES.SERVICE,
        message:
          "The email service is temporarily unavailable. Please try again in a few moments.",
      };
    }

    // Validation errors
    if (error.status >= 400) {
      return {
        category: ERROR_CATEGORIES.VALIDATION,
        message:
          "There was a problem with your message. Please check and try again.",
      };
    }

    return {
      category: ERROR_CATEGORIES.UNKNOWN,
      message: "Failed to send message. Please try again.",
    };
  };