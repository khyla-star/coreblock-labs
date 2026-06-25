import {
  DEFAULT_PHONE_COUNTRY_CODE,
  phoneCountryCodes,
} from '../../data/phoneCountryCodes';
import type { FormEvent } from 'react';

type PhoneCountryInputProps = {
  idPrefix?: string;
  invalid?: boolean;
  className?: string;
  countryCode?: string;
  phoneNumber?: string;
  onCountryCodeChange?: (value: string) => void;
  onPhoneNumberChange?: (value: string) => void;
  phoneInputId?: string;
};

export default function PhoneCountryInput({
  idPrefix = 'phone',
  invalid = false,
  className = '',
  countryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange,
  phoneInputId,
}: PhoneCountryInputProps) {
  const isControlled = countryCode !== undefined && phoneNumber !== undefined;
  const selectedCountryCode = isControlled ? countryCode : DEFAULT_PHONE_COUNTRY_CODE;
  const numberInputId = phoneInputId ?? `${idPrefix}Number`;

  const handleNumberChange = (value: string) => {
    const nextValue = value.replace(/[^\d\s-]/g, '');
    onPhoneNumberChange?.(nextValue);
  };

  const sanitizeUncontrolledNumber = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const nextValue = input.value.replace(/[^\d\s-]/g, '');
    if (nextValue !== input.value) {
      input.value = nextValue;
    }
  };

  return (
    <div className={`phone-country-field ${className}`.trim()}>
      <div className={`phone-country-input${invalid ? ' phone-country-input--invalid' : ''}`}>
        <select
          id={`${idPrefix}CountryCode`}
          name="phone_country_code"
          className="form-select phone-country-input__code"
          value={isControlled ? selectedCountryCode : undefined}
          defaultValue={isControlled ? undefined : DEFAULT_PHONE_COUNTRY_CODE}
          onChange={
            isControlled
              ? (event) => onCountryCodeChange?.(event.target.value)
              : undefined
          }
          aria-label="Country code"
        >
          {phoneCountryCodes.map((country) => (
            <option key={country.iso} value={country.dialCode}>
              {country.flag} {country.dialCode}
            </option>
          ))}
        </select>
        <input
          id={numberInputId}
          name="phone"
          type="tel"
          className="form-control phone-country-input__number"
          value={isControlled ? phoneNumber : undefined}
          defaultValue={isControlled ? undefined : ''}
          onChange={
            isControlled
              ? (event) => handleNumberChange(event.target.value)
              : undefined
          }
          onInput={isControlled ? undefined : sanitizeUncontrolledNumber}
          placeholder="50 123 4567"
          inputMode="numeric"
          autoComplete="tel-national"
          aria-invalid={invalid ? true : undefined}
        />
      </div>
    </div>
  );
}

export { DEFAULT_PHONE_COUNTRY_CODE };
