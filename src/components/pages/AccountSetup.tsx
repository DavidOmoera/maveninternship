import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowRight } from "assets/ArrowRight";
import classNames from "classnames";
import { Button } from "components/atoms/Button";
import { Pill } from "components/molecules/Pill";
import { AboutUser } from "components/organisms/AboutUser";
import { colors } from "constants/common";
import { aboutUserSchema } from "constants/schemas";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

export type TAboutUserForm = {
  firstName: string;
  lastName: string;
  industryAffiliation: string;
  industrySize: string;
};

const TOTAL_STEPS = 4;
const STEP_TITLES = [
  "Account Setup",
  "Personal Account Set-Up",
  "Organization Account Set-Up",
  "Account Setup",
  "Account Setup",
];

export function AccountSetup() {
  const [step, setStep] = useState(1);

  const {
    control: aboutUserControl,
    handleSubmit: handleAboutUserFormSubmit,
    formState: {
      errors: aboutUserFormErrors,
      isDirty: isAboutUserFormDirty,
      isSubmitting: isAboutUserFormSubmitting,
      isValid: isAboutUserFormValid,
    },
  } = useForm<TAboutUserForm>({
    resolver: yupResolver(aboutUserSchema),
  });

  const isNextButtonDisabled = useMemo(() => {
    switch (step) {
      case 1:
        return (
          !isAboutUserFormDirty ||
          !isAboutUserFormValid ||
          isAboutUserFormSubmitting
        );

      default:
        break;
    }
  }, [
    isAboutUserFormDirty,
    isAboutUserFormSubmitting,
    isAboutUserFormValid,
    step,
  ]);

  const isPreviousButtonDisabled = useMemo(() => step === 1, [step]);

  function goToPreviousStep() {
    if (step !== 0) setStep((prevStep) => prevStep - 1);
  }

  function goToNextStep() {
    if (step < TOTAL_STEPS) setStep((prevStep) => prevStep + 1);
  }

  return (
    <div className="w-full col items-center h-[90vh] mt-16">
      <div className="w-[70%] col justify-between h-full">
        <div className="gap-4">
          <div className="row w-full justify-between">
            <h4 className="font-extrabold text-xl">{STEP_TITLES[step]}</h4>
            <Pill text={`${step}/${TOTAL_STEPS}`} />
          </div>
          <div className="w-full flex justify-between mt-7 mb-10">
            <div className="flex-1 h-1 mx-2 bg-gray-200">
              <div
                className={classNames("h-full bg-blue-500", {
                  "w-1/4": step === 1,
                  "w-2/4": step === 2,
                  "w-3/4": step === 3,
                  "w-full": step === 4,
                })}
              />
            </div>
          </div>
          {step === 1 && (
            <AboutUser
              control={aboutUserControl}
              errors={aboutUserFormErrors}
            />
          )}
        </div>

        <div className="w-full  bottom-0 flex justify-between mt-6">
          <Button
            text="Previous"
            disabled={isPreviousButtonDisabled}
            variant="secondary"
            leftIcon={
              <ArrowRight color={colors.primary} className="rotate-180" />
            }
            onClick={goToPreviousStep}
          />
          <Button
            text="Next"
            disabled={isNextButtonDisabled}
            onClick={goToNextStep}
            rightIcon={<ArrowRight />}
          />
        </div>
      </div>
    </div>
  );
}
