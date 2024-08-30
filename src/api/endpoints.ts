export const endpoints = {
  activity: {
    getActivity: (userId: string): string => `/activity_logs/${userId}`,
    postActivity: (): string => `/activity_logs`,
  },
  auth: {
    register: (): string => `/register`,
    verifyEmail: (): string => `/verify-email`,
    resendVerificationEmail: (): string => `/resend-verification`,
    login: (): string => `/token`,
    updateUserProfile: (): string => `/update_user_info`,
    getUserData: (): string => `/users/me`, // For current user
    loginWithGoogle: (): string => `/google-login`,
    loginWithOutlook: (): string => `/outlook-login`,
    logout: (): string => `/logout`,
    initiatePasswordReset: (): string => `/password-reset-request`,
    resetPassword: (): string => `/password-reset`,

    registerOrganization: (): string => `/register-org-account`,
    getOrganization: (): string => `/organization-details`,
    updateOrganizationDetails: (): string => `/update_org_details`,
    updateOrganizationContactDetails: (): string => `/update_org_contact`,

    resetPersonalAccount: (): string => `/create_personal_account`,
  },
  bills: {
    getBill: (billId: string): string => `/bills/${billId}`,
    getBills: (): string => `/bills`,
    searchBills: (): string => `/bills/filter`,
    getBillVotes: (billId: string): string => `/bills/${billId}/votes`,
    getBillActions: (billId: string): string => `/bills/${billId}/actions`,
    getBillContributors: (billId: string): string =>
      `/bills/${billId}/contributors`,
    getBillSummary: (billId: string): string => `/bills/${billId}/summary`,
    trackBill: (): string => `/bills/track_bill`,
    stopTrackingBill: (): string => `/bills/stop_tracking_bill`,
    getTrackedBills: (): string => `/bills/tracked_bills`,
    chatAboutBill: (): string => `/bills/coterieai`,
  },
  feedback: {
    getFeedback: (): string => `/feedback`,
  },
  notifications: {
    getNotifications: (userId: string): string => `/notifications/${userId}`,
    updateNotificationStatus: (notificationId: string): string =>
      `/notifications/${notificationId}`,
    updateNotificationSettings: (userId: string): string =>
      `/notifications/notification-settings/${userId}`,
  },
  legislativesessions: {
    getSessions: (): string => `/legislativesessions`,
  },
  jurisdictions: {
    getAll: () => `/jurisdictions`,
  },
};
