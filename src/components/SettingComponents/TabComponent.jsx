import { useState } from "react";
import SettingsHistory from './SearchHistory'
import Faq from "./Faq";
import TermsAndConditions from "./TermsAndConditions";

const FAQ = () => <Faq />;
const TermsAndCondition = () => <TermsAndConditions />;
const General = () => (<SettingsHistory/>);

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("FAQ");

  const renderContent = () => {
    switch (activeTab) {
      case "FAQ":
        return <FAQ />;
      case "Terms&condition":
        return <TermsAndCondition />;
      case "General":
        return <General />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto mt-10 rounded-lg">
      <div className="flex bg-gray-100 p-2 rounded-t-lg w-[100%]">
        {["General", "FAQ", "Terms&condition"].map((tab) => (
          <button
            key={tab}
            className={`flex w-[100%] p-2 justify-center text-center rounded-md transition-all duration-200 ${
              activeTab === tab ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg- p-4">{renderContent()}</div>
    </div>
  );
};

export default TabComponent;
