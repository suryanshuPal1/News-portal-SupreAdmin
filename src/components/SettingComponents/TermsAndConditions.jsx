import React from 'react'

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      
      <div className="container mx-auto mt-8 p-5 bg-white shadow-md rounded-md">
  
        <div className="mt-6 text-gray-600">
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <p className="font-semibold">Introduction</p>
              <p>
                By accessing the Super Admin Panel, you agree to comply with these Terms & Services. This panel is
                for authorized personnel only and is used to manage the news portal's content, users, and system
                settings.
              </p>
            </li>
            <li>
              <p className="font-semibold">Admin Responsibilities</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ensure all published news content is accurate, ethical, and legally compliant.</li>
                <li>Manage user accounts, including journalists, editors, and subscribers.</li>
                <li>Maintain platform security, prevent unauthorized access, and report any breaches.</li>
                <li>Monitor and manage advertisements in a transparent manner.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Content & Copyright Policies</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>All news articles, images, and videos must comply with copyright laws.</li>
                <li>Plagiarism and the spread of misinformation are strictly prohibited.</li>
                <li>Proper attribution is required when using third-party content.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Data Usage & Privacy</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Super Admins must handle user data responsibly and comply with data protection laws (e.g., GDPR,
                  CCPA).
                </li>
                <li>Personal user data cannot be shared, sold, or misused.</li>
                <li>Audit logs will be maintained to track all admin activities for transparency.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Security & Compliance</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Super Admins must handle user data responsibly and comply with data protection laws (e.g., GDPR,
                  CCPA).
                </li>
                <li>Personal user data cannot be shared, sold, or misused.</li>
                <li>Audit logs will be maintained to track all admin activities for transparency.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Account Suspension & Termination</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Misuse of admin privileges will result in account suspension or termination.</li>
                <li>Any attempt to manipulate or exploit the platform is strictly prohibited.</li>
                <li>Security violations, hacking attempts, or policy breaches will lead to immediate removal.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Agreement & Acceptance</p>
              <p>
                By accessing the Super Admin Panel, you acknowledge that you have read, understood, and agree to abide
                by these Terms & Services. Failure to comply may result in loss of access or legal action.
              </p>
            </li>
          </ol>
        </div>

        {/* Change Terms & Services Button */}
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Change Terms & Services
          </button>
        </div>
      </div>

      
    </div>
  )
}
