import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/atoms/Button";
import { ControlledInput } from "components/organisms/ControlledInput";
import { ControlledSelect } from "components/organisms/ControlledSelect";
import { PageContainer } from "components/templates/PageContainer";
import { helpAndSupportSchema } from "constants/schemas";
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Envelope } from "assets/Envelope";
import { Phone } from "assets/Phone";
import { Social } from "assets/Social";
import { LinkedIn } from "assets/LinkedIn";
import { ISSUES_OPTIONS } from "constants/common";

const CONTACT_DETAILS = [
  {
    Icon: <Envelope color="#FFC700" />,
    text: "jasminecrockett@uscongress.com",
  },
  {
    Icon: <Phone color="#FFC700" />,
    text: "09090909090",
  },
  {
    Icon: <Social />,
    text: "Coterie AI",
  },
  {
    Icon: <LinkedIn color="#FFC700" />,
    text: "Coterie AI",
  },
];

type THelpAndSupportForm = {
  first_name: string;
  last_name: string;
  company_name?: string;
  email_address: string;
  issue?: string;
  message: string;
};

export function HelpAndSupport() {
  const {
    control,
    formState: { errors, isDirty, isSubmitting, isValid },
    handleSubmit,
  } = useForm<THelpAndSupportForm>({
    resolver: yupResolver(helpAndSupportSchema),
  });

  const isSubmitDisabled = useMemo(
    () => !isDirty || isSubmitting || !isValid,
    [isDirty, isSubmitting, isValid]
  );

  const onSubmitMessage: SubmitHandler<THelpAndSupportForm> = (
    formData: THelpAndSupportForm
  ) => {
    console.log("help and support data", formData);
  };

  return (
    <PageContainer title="Help & Support">
      <div className="row justify-between bg-white mx-9 mt-6 rounded-xl p-9 lg:py-10 lg:px-16 xl:py-20 xl:px-32 gap-32">
        <section className="col md:basis-[52%] md:max-w-[670px]">
          <article className="col gap-1">
            <h1 className="text-black font-bold text-4xl">Get in Touch</h1>
            <p className="text-neutral500 text-lg">
              We are here to help. Contact our team for your needs
            </p>
          </article>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-9 mb-5 gap-4">
            <ControlledInput
              control={control}
              label="First Name"
              required
              name="first_name"
              placeholder="First Name"
              containerClasses="rounded-lg"
              error={!!errors?.first_name}
              helperText={(errors?.first_name?.message as string) ?? ""}
            />
            <ControlledInput
              control={control}
              label="Last Name"
              required
              name="last_name"
              placeholder="Last Name"
              containerClasses="rounded-lg"
              error={!!errors?.last_name}
              helperText={(errors?.last_name?.message as string) ?? ""}
            />
          </div>
          <div className="col gap-5">
            <ControlledInput
              control={control}
              label="Email Address"
              required
              name="email_address"
              placeholder="Email Address"
              containerClasses="rounded-lg"
              error={!!errors?.email_address}
              helperText={(errors?.email_address?.message as string) ?? ""}
            />
            <ControlledInput
              control={control}
              label="Company Name (Optional)"
              name="company_name"
              placeholder="Company Name"
              containerClasses="rounded-lg"
              error={!!errors?.company_name}
              helperText={(errors?.company_name?.message as string) ?? ""}
            />
            <ControlledSelect
              name="issue"
              control={control}
              defaultValue={ISSUES_OPTIONS[0].value}
              options={ISSUES_OPTIONS}
              helperText={errors.issue?.message as string}
            />
            <ControlledInput
              control={control}
              label="You message"
              required
              name="message"
              placeholder="How can we help you?"
              containerClasses="rounded-lg"
              error={!!errors?.message}
              helperText={(errors?.message?.message as string) ?? ""}
            />
          </div>

          <Button
            text="Send Message"
            onClick={handleSubmit(onSubmitMessage)}
            disabled={isSubmitDisabled}
            className="mt-6"
          />
        </section>
        <div className="hidden md:flex md:flex-col md:justify-start md:basis-[37%] max-w-[480px]">
          <div className="bg-accent800 p-9 rounded-2xl gap-6">
            <h1 className="font-bold text-4xl text-white">Contact Us Online</h1>
            <div className="col gap-5 mt-6">
              {CONTACT_DETAILS.map((contact, index) => (
                <div
                  key={contact.text + index}
                  className="row gap-2 items-center"
                >
                  {contact.Icon}
                  <p className="text-white text-lg">{contact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
