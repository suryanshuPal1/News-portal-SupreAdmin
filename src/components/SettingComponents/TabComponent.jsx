// import { useState } from "react";
// import SettingsHistory from './SearchHistory'
// import Faq from "./Faq";
// import TermsAndConditions from "./TermsAndConditions";
// import Contactus from "./Contactus";
// import Aboutus from "./Aboutus";
// import icon1 from '../../assets/setting/setting-icon.png'
// import icon2 from '../../assets/setting/setting-faq.png'
// import icon3 from '../../assets/setting/setting-user.png'

// const FAQ = () => <Faq />;
// const TermsAndCondition = () => <TermsAndConditions />;
// const General = () => (<SettingsHistory/>);
// const AboutUs = () => (<Aboutus/>);
// const ContactUs = () => (<Contactus/>);

// const TabComponent = () => {
//   const [activeTab, setActiveTab] = useState("FAQ");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "FAQ":
//         return <FAQ />;
//       case "Terms&condition":
//         return <TermsAndCondition />;
//       case "General":
//         return <General />;
//       case "AboutUs":
//         return <Aboutus />;
//       case "ContactUs":
//         return <Contactus />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="mx-auto mt-10 rounded-lg">
//       <div className="flex bg-gray-100 p-2 rounded-t-lg w-[100%]">
//         {["General",`General ${<img src={icon1}/>}`, "FAQ", "Terms&condition" ,"AboutUs","ContactUs"].map((tab) => (
//           <button
//             key={tab}
//             className={`flex w-[100%] p-2 justify-center text-center rounded-md transition-all duration-200 ${
//               activeTab === tab ? "text-blue-500 bg-white" : "text-gray-700"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//       <div className="bg- p-4">{renderContent()}</div>
//     </div>
//   );
// };

// export default TabComponent;



import { useState } from "react";
import SettingsHistory from './SearchHistory'
import Faq from "./Faq";
import TermsAndConditions from "./TermsAndConditions";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import icon1 from '../../assets/setting/setting-icon.png'
import icon2 from '../../assets/setting/setting-faq.png'
import icon3 from '../../assets/setting/setting-user.png'

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("General");

  const renderContent = () => {
    switch (activeTab) {
      case "General":
        return <SettingsHistory />;
      case "FAQ":
        return <Faq />;
      case "Terms&condition":
        return <TermsAndConditions />;
      case "AboutUs":
        return <Aboutus />;
      case "ContactUs":
        return <Contactus />;
      default:
        return null;
    }
  };

  const tabs = [
    { label: "General", icon: icon3 },
    { label: "Terms&condition", icon: icon1 },
    { label: "FAQ", icon: icon2 },
    { label: "AboutUs", icon: icon1 },
    { label: "ContactUs", icon: icon1 }
  ];

  return (
    <div className="mx-auto mt-10 rounded-lg">
      <div className="flex bg-gray-100 p-2 rounded-t-lg w-[100%]">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center w-[100%] p-2 justify-center text-center gap-2 rounded-md transition-all duration-200 ${
              activeTab === tab.label ? "text-blue-500 bg-white" : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.icon && <img src={tab.icon} alt={tab.label} className="w-5 h-5" />}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-white p-4">{renderContent()}</div>
    </div>
  );
};

export default TabComponent;
