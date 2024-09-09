export const endpoints = {
  activity: {
    createActivity: (): string => `/activity_logs`,
    getActivityLogs: (user_id: number) => `/activity_logs/${user_id}`,
    searchActivity: () => `/search_activity_logs`,
  },

  admin: {
    makeAdmin: (): string => `admin/make_admin`,
    getAllUsers: (): string => `admin/get_all_users`,
    getAllOrganizations: (): string => `admin/get_all_organizations`,
    searchUsers: (): string => `/admin/search_users`,
    searchOrganization: (): string => `/admin/search_organization`,
    deleteUser: (): string => `/admin/delete_user`,
    deleteOrganization: (): string => `/admin/delete_organization`,
    suspendUser: (): string => `/admin/suspend_user`,
    suspendOrganization: (): string => `/admin/suspend_organization`,
    unsuspendUser: (): string => `/admin/unsuspend_user`,
    unsuspendOrganization: (): string => `/admin/unsuspend_organization`,
    updateUserRole: (): string => `/admin/update_user_role`,
    updateUserDetails: (): string => `/admin/update_user_details`,
    updateOrganizationDetail: (): string =>
      `/admin/update_organization_details`,
    banEmail: (): string => `/admin/ban_email`,
    deleteBannedEmail: (): string => `/admin/delete_banned_email`,
  },

  auth: {
    register: (): string => `/register/`,
    verifyEmail: (): string => `/verify-email/`,
    login: (): string => `/token`,
    updateUserProfile: (): string => `/update_user_info`,
    getUserData: (): string => `/users/me`, // For current user
    logout: (): string => `/logout`,
    send_receipt: (): string => `/send_receipts`,
    resendVerificationEmail: (): string => `/resend-verification`,
    loginWithGoogle: (): string => `/google-login`,
    loginWithOutlook: (): string => `/outlook-login`,
    initiatePasswordReset: (): string => `/password-reset-request`,
    resetPassword: (): string => `/password-reset`,
    createCheckoutSession: (): string =>
      `/create-checkout-session-account-setup`,
    stripeWebhook: (): string => `/webhook-account-setup`,
    accountCreation: (): string => `/create_org_account`,
    getUserDetails: (): string => `/user-details`,
    registerOrganization: (): string => `/register-org-account`,
    resetPersonalAccount: (): string => `/create_personal_account`,

    getOrganization: (): string => `/organization-details`,
    updateOrganizationDetails: (): string => `/update_org_details`,
    updateOrganizationContactDetails: (): string => `/update_org_contact`,
  },
  bills: {
    getBill: (billId: string): string => `/bills/${billId}`,
    getBills: (): string => `/bills/`,
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
    createNotification: (): string => `/notifications`,
    getNotifications: (user_id: number): string => `/notifications/${user_id}`,
    updateNotificationStatus: (notification_id: number): string =>
      `/notifications/${notification_id}`,
    createNotificationSettings: (): string =>
      `/notifications/notification-settings`,
    updateNotificationSettings: (user_id: number): string =>
      `/notifications/notification-settings/${user_id}`,
  },

  legislativeSessions: {
    getSessions: (): string => `/legislativesessions`,
  },
  jurisdictions: {
    getAll: () => `/jurisdictions`,
  },

  subscription: {
    getPlans: (): string => `/subscription_plans`,
  },
  committees: {
    getCommittees: (
      jurisdiction?: string,
      skip: number = 0,
      limit: number = 10
    ): string =>
      `/committees?jurisdiction=${
        jurisdiction || ""
      }&skip=${skip}&limit=${limit}`,
    getCommittee: (committeeId: string): string => `/committees/${committeeId}`,
    getCommitteeMemberships: (committeeId: string): string =>
      `/committees/${committeeId}/memberships`,
  },
};
