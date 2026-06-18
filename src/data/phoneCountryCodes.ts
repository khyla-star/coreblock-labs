export type PhoneCountryCode = {
  iso: string;
  name: string;
  dialCode: string;
  flag: string;
};

export const DEFAULT_PHONE_COUNTRY_CODE = '+971';

export const phoneCountryCodes: PhoneCountryCode[] = [
  { iso: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪' },
  { iso: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { iso: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { iso: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { iso: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
  { iso: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
  { iso: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦' },
  { iso: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼' },
  { iso: 'BH', name: 'Bahrain', dialCode: '+973', flag: '🇧🇭' },
  { iso: 'OM', name: 'Oman', dialCode: '+968', flag: '🇴🇲' },
  { iso: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { iso: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { iso: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { iso: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { iso: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰' },
  { iso: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩' },
  { iso: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭' },
  { iso: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾' },
  { iso: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩' },
  { iso: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬' },
  { iso: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦' },
  { iso: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
  { iso: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
  { iso: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷' },
  { iso: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳' },
  { iso: 'HK', name: 'Hong Kong', dialCode: '+852', flag: '🇭🇰' },
  { iso: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱' },
  { iso: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭' },
  { iso: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪' },
];
