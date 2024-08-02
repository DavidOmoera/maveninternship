import classNames from "classnames";
import { Tab, TTabProps } from "components/atoms/Tab";

type TTabs = {
  tabs: Omit<TTabProps, "onClickTab" | "isActive">[];
  className?: string;
  setActiveTab: (value: string) => void;
  activeTab: string;
};

export function Tabs({ tabs, className, setActiveTab, activeTab }: TTabs) {
  return (
    <div
      className={classNames(
        "row gap-3 border-b border-b-neutral100",
        className
      )}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          isActive={tab.value === activeTab}
          onClickTab={setActiveTab}
          {...tab}
        />
      ))}
    </div>
  );
}
