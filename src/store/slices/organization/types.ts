export type TOrganization = {
  name: string;
  industry: string;
  businessType: string;
  size: string;
  contact: {
    name: string;
    email: string;
    address: string;
    zipCode: string;
  };
  logo: string;
};

export type TOrganizationState = Partial<{
  organizationData: TOrganization;
  organizationDataError: string;
  organizationDataLoading: boolean;
}>;
