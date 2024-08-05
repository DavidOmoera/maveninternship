import { useState } from "react";
import { ProductCard } from "components/molecules/ProductCard";
import legislativeIcon from "../../assets/legislativeIcon.png";
import regulatoryIcon from "../../assets/regulatoryIcon.png";
import proIcon from "../../assets/proIcon.png";

export const SelectProduct: React.FC<{
  onProductSelect: (product: string | null) => void;
}> = ({ onProductSelect }) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleProductSelect = (product: string) => {
    setSelectedProduct(product);
    onProductSelect(product);
  };

  return (
    <div>
      <h1 className="font-extrabold text-2xl">Select Product</h1>
      <p className="text-neutral450 pb-8">
        Empower your experience, sign up for a premium account today.
      </p>
      <div className="flex justify-between gap-3 flex-wrap md:flex-nowrap">
        <ProductCard
          color="blue"
          title="Legislative AI"
          description="The perfect Legislature analysis tool"
          price="$000*"
          onClick={() => handleProductSelect("Legislative AI")}
          isSelected={selectedProduct === "Legislative AI"}
        />
        <ProductCard
          color="red"
          title="Regulatory AI"
          description="The perfect Legislature analysis tool"
          price="$000*"
          onClick={() => handleProductSelect("Regulatory AI")}
          isSelected={selectedProduct === "Regulatory AI"}
        />
        <ProductCard
          color="green"
          title="Pro"
          description="The perfect Legislature analysis tool"
          price="$000*"
          onClick={() => handleProductSelect("Pro")}
          isSelected={selectedProduct === "Pro"}
        />
      </div>
    </div>
  );
};
