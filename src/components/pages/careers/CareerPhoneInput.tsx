import {
  DEFAULT_PHONE_COUNTRY_CODE,
  phoneCountryCodes,
} from '../../../data/phoneCountryCodes';

type CareerPhoneInputProps = {
  countryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  error?: string;
  id?: string;
};

export default function CareerPhoneInput({
  countryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange,
  error,
  id = 'careerApplyPhone',
}: CareerPhoneInputProps) {
  const selectedCountry =
    phoneCountryCodes.find((country) => country.dialCode === countryCode) ??
    phoneCountryCodes[0];

  return (
    <div className="careers-phone-field">
      <div className={`careers-phone-input${error ? ' careers-phone-input--invalid' : ''}`}>
        <select
          id={`${id}Country`}
          className="form-select careers-phone-input__code"
          value={selectedCountry.dialCode}
          onChange={(event) => onCountryCodeChange(event.target.value)}
          aria-label="Country code"
        >
          {phoneCountryCodes.map((country) => (
            <option key={country.iso} value={country.dialCode}>
              {country.flag} {country.dialCode}
            </option>
          ))}
        </select>
        <input
          id={id}
          type="tel"
          className="form-control careers-phone-input__number"
          value={phoneNumber}
          onChange={(event) => {
            const nextValue = event.target.value.replace(/[^\d\s-]/g, '');
            onPhoneNumberChange(nextValue);
          }}
          placeholder="50 123 4567"
          inputMode="numeric"
          autoComplete="tel-national"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}Error` : undefined}
        />
      </div>
      {error ? (
        <p className="careers-field-error" id={`${id}Error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export { DEFAULT_PHONE_COUNTRY_CODE };
