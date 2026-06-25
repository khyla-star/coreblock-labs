import PhoneCountryInput, { DEFAULT_PHONE_COUNTRY_CODE } from '../../shared/PhoneCountryInput';

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
  return (
    <div className="phone-country-field">
      <PhoneCountryInput
        idPrefix={id}
        phoneInputId={id}
        invalid={Boolean(error)}
        countryCode={countryCode}
        phoneNumber={phoneNumber}
        onCountryCodeChange={onCountryCodeChange}
        onPhoneNumberChange={onPhoneNumberChange}
      />
      {error ? (
        <p className="careers-field-error" id={`${id}Error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export { DEFAULT_PHONE_COUNTRY_CODE };
