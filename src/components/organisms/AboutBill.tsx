import { ArrowRight } from "assets/ArrowRight";
import { Button } from "components/atoms/Button";
import download from "assets/download.svg";

export function AboutBill() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Introduction</h3>
        <Button
          variant="secondary"
          text="Download Bill"
          leftIcon={<img src={download} className="w-4 h-4" />}
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
        lectus non quam euismod cursus. Nam eleifend, urna in pretium posuere,
        massa dui sagittis nulla, molestie mollis mi leo vel neque. Nunc gravida
        tristique orci at hendrerit. Sed erat elit, egestas a nisl vel, gravida
        vehicula magna.
      </p>
      <div className="mt-6 p-4 bg-gray-50 rounded-lg flex justify-between items-center">
        <div>
          <h4 className="font-bold">Skip the Jargon!</h4>

          <p className="text-neutral600">Read Coterie AI's Summary instead.</p>
        </div>
        <Button rightIcon={<ArrowRight />} text="View Summary" />
      </div>
    </>
  );
}
