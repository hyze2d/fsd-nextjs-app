type CurrentUserContract = CreateAndUpdate<{
  id: number;
  status: 'active';
  isAdmin: boolean;
  pendingApproval: boolean;
  marketingSendoutsUnsubscription: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  langCode: Locale;
  birthday: string; //'2001-01-01'
  gender: 'm' | 'f';
  comments: null;
}>;

export type { CurrentUserContract };
