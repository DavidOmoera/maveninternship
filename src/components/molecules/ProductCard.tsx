import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CoterieBot } from "assets/CoterieBot";
import { Button } from "components/atoms/Button";

interface ProductCardProps {
  color: string;
  title: string;
  description: string;
  price: string;
  onClick: () => void;
  isSelected: boolean;
}

const features: string[] = [
  "Maximum of two active sessions",
  "Phasellus tristique augue nec arcu pulvinar",
  "Aliquam hendrerit",
  "Nullam dignissim imperdiet",
  "Maximum of two active sessions",
];

export const ProductCard: React.FC<ProductCardProps> = ({
  color,
  title,
  description,
  price,
  onClick,
  isSelected,
}) => (
  <div
    className={`bg-blue-50 shadow-sm px-4 py-5 mb-4 border rounded-lg w-full min-w-56 cursor-pointer ${
      isSelected ? "border-blue-500" : "border-gray-300"
    }`}
    onClick={onClick}
  >
    <CoterieBot color={color} className="w-8" />
    <h2 className="font-extrabold text-lg mt-3">{title}</h2>
    <p className="text-neutral700 pb-6 mt-1 text-sm">{description}</p>
    <h2 className="font-extrabold text-2xl">{price}</h2>
    <p className=" text-neutral400 text-sm mb-3">/year</p>
    <ul className="py-3">
      {features.map((feature) => (
        <li key={feature} className="font-medium text-xs mb-1 text-neutral-700">
          <CheckCircleIcon
            style={{
              marginRight: "8px",
              color: "#1026C3",
              padding: "2px",
            }}
          />
          {feature}
        </li>
      ))}
    </ul>
    <Button
      text="Choose Product"
      variant={isSelected ? "primary" : "secondary"}
      className="my-4 w-full"
    />
    <p className="font-medium text-xs text-neutral-700">
      *Introductory offer, subject to change
    </p>
  </div>
);
